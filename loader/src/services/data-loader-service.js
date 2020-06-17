import { pathExists } from "fs-extra";
import path from "path";
import { has, groupBy, compact, isEmpty } from "lodash";
import Exceljs from "exceljs";

export class DataLoader {
    constructor({ dataPath }) {
        this.dataPath = dataPath;
    }
    async load() {
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
            return collection.Shelfmark.pop();
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
            items[collection] = sheetToJson({ sheet, headerRowNumber: 2 });
        }
        return { collections, items };
    }
}

function cleanupItem({ item }) {
    let d = {};
    for (let key of Object.keys(item)) {
        const value = item[key];
        key = key.replace(/ \[mandatory.*\]/, "").trim();

        key = key.replace(/ \(\+\)/, "").trim();
        if (key.match("_")) {
            key = key
                .split("_")
                .slice(0, -1)
                .join("_");
            if (!has(d, key)) d[key] = [];
            d[key].push(value);
        } else {
            d[key] = [value];
        }
    }

    for (let key of Object.keys(d)) {
        if (d[key].length === 1) d[key] = d[key].pop();
    }
    return d;
}

export function sheetToJson({ sheet, headerRowNumber = 1 }) {
    let headerRow = sheet.getRow(headerRowNumber);
    headerRow = headerRow._cells.map((cell) => {
        let header = cell.value
            .replace(/\[.*\]/, "")
            .trim()
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
            let key = headers[cell.column];
            let value = cell.value;
            data.push({ key, value });
        });
        data = groupBy(data, "key");
        for (let key of Object.keys(data)) {
            data[key] = data[key].map((k) => k.value);
        }
        return data;
    });
    rows = compact(rows);
    // console.log(JSON.stringify(rows, null, 2));
    return rows;
}
