import { pathExists, copy } from "fs-extra";
import path from "path";
import { has, groupBy, compact, isEmpty, isPlainObject } from "lodash";
import Exceljs from "exceljs";
import { ensureDir, writeJSON } from "fs-extra";
import { store } from "../renderer/store";

export class DataLoader {
    constructor({ dataPath }) {
        this.dataPath = dataPath;
        this.store = store;
    }

    async import() {
        const workbookFile = path.join(this.dataPath, "metadata.xlsx");

        // check that we have a file named metadata.xslx
        const exists = await pathExists(workbookFile);

        if (!exists) {
            throw new Error(
                `That path does not have a file named 'metadata.xlsx'`
            );
        }

        let workbook = new Exceljs.Workbook();
        await workbook.xlsx.readFile(workbookFile);

        let sheet;

        // ensure there is a sheet called 'Collection metadata'
        sheet = workbook.getWorksheet("Collection metadata");
        if (!sheet) {
            throw new Error(
                `A sheet named 'Collection metadata' was not found.`
            );
        }

        const collections = sheetToJson({ sheet, headerRowNumber: 2 });
        let collectionIdentifiers = collections.map((collection) => {
            return collection.Shelfmark[0];
        });
        for (let code of collectionIdentifiers) {
            const collectionPath = path.join(this.dataPath, code);
            if (!(await pathExists(collectionPath))) {
                throw new Error(`Unable to find the folder ${collectionPath}`);
            }
        }

        let items = {};
        let errors = [];
        for (let collection of collectionIdentifiers) {
            let sheet = workbook.getWorksheet(
                `${collection} Recording metadata`
            );
            if (!sheet) {
                throw new Error(
                    `A sheet named '${collection} Recording metadata' was not found.`
                );
            }
            let itemMetadata = sheetToJson({ sheet, headerRowNumber: 2 });
            for (let item of itemMetadata) {
                item.collectionId = collection;

                // rewrite the files with the path
                item["Original filename"] = item["Original filename"].map(
                    (file) => `${collection}/${file}`
                );

                // check that each exists
                for (let file of item["Original filename"]) {
                    let fileExists = await pathExists(
                        path.join(this.dataPath, file)
                    );
                    if (!fileExists) {
                        throw new Error(`File '${file}' not found.`);
                    }
                }
            }
            // console.log(collection, itemMetadata);
            items[collection] = groupBy(
                itemMetadata,
                (item) => item.Shelfmark[0]
            );
        }
        return { collections, items };
    }

    async load({ target, data, dataOnly = false }) {
        if (!dataOnly) {
            let viewerSource;
            viewerSource = path.join(__dirname, "..", "viewer");
            await copy(viewerSource, target);
        }

        target = `${target}/repository`;
        await ensureDir(target);
        store.commit("resetMessages");

        let index = `${target}/index.json`;
        await writeJSON(index, data);

        // copy over the data
        for (let collection of data.collections) {
            const source = path.join(this.dataPath, collection.Shelfmark[0]);
            const output = path.join(target, collection.Shelfmark[0]);
            try {
                store.commit(
                    "setInfoMessage",
                    `Writing data for collection ${collection.Shelfmark[0]}`
                );
                await copy(source, output);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}

export function sheetToJson({ sheet, headerRowNumber = 1 }) {
    let headerRow = sheet.getRow(headerRowNumber);
    headerRow = headerRow._cells.map((cell) => {
        let header = cell.value
            .replace(/\[.*\]/, "")
            .replace(/\(\+\)/, "")
            .trim();
        return {
            column: cell._column._number,
            address: cell.address,
            value: header,
        };
    });

    let headers = {};
    headerRow.forEach((row) => {
        headers[row.column] = row.value;
    });

    let rows = sheet._rows.map((row) => {
        return row._cells.map((cell) => {
            return {
                column: cell._column._number,
                cell: cell.address,
                value: cell.value,
            };
        });
    });
    rows = rows.slice(headerRowNumber).map((row) => {
        let data = [];
        if (isEmpty(compact(row.map((cell) => cell.value)))) return null;

        row.forEach((cell) => {
            let key = headers[cell.column].replace("\n", "");
            if (isPlainObject(cell.value) && cell.value.richText) {
                let value = cell.value.richText.map((fragment) => {
                    if (!fragment.font) return fragment.text;
                    if (fragment.font && fragment.font.italic)
                        return `<em>${fragment.text}</em>`;
                    if (fragment.font && fragment.font.bold)
                        return `<strong>${fragment.text}</strong>`;
                    return fragment.text;
                });
                data.push({ key, value: value.join(" ") });
            } else {
                data.push({ key, value: cell.value });
            }
        });
        data = groupBy(data, "key");
        for (let key of Object.keys(data)) {
            data[key] = data[key].map((k) => k.value);
            data[key] = compact(data[key]);
        }
        return data;
    });
    rows = compact(rows);

    return rows;
}
