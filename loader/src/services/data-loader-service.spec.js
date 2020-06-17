import "regenerator-runtime";

import { ensureDir, ensureFile, remove } from "fs-extra";
import path from "path";
import Exceljs from "exceljs";
import { DataLoader } from "./data-loader-service";

let dataLoader;
beforeEach(() => {
    dataLoader = new DataLoader({
        dataPath: path.join(__dirname, "test"),
    });
});

test("it should fail to verify because metadata sheet not found", async () => {
    await ensureDir(path.join(__dirname, "test"));

    try {
        await dataLoader.load();
    } catch (error) {
        expect(error.message).toBe(
            `That path does not have a file named 'metadata.xlsx'`
        );
    }

    await remove(path.join(__dirname, "test"));
});

test("it should fail because there is no Collection metadata sheet", async () => {
    await ensureDir(path.join(__dirname, "test"));
    let workbook = new Exceljs.Workbook();
    await workbook.xlsx.writeFile(
        path.join(__dirname, "test", "metadata.xlsx")
    );

    try {
        await dataLoader.load();
    } catch (error) {
        expect(error.message).toBe(
            `A sheet named 'Collection metadata' was not found.`
        );
    }

    await remove(path.join(__dirname, "test"));
});

test("it should fail because a metadata folder is not found", async () => {
    await ensureDir(path.join(__dirname, "test"));

    let workbook = new Exceljs.Workbook();
    let sheet = workbook.addWorksheet("Collection metadata");

    let data = [
        ["087", "091", "093", "312", "490", "490", "531"],
        [
            "Shelfmark [mandatory]",
            "Location of Original",
            "Format code",
            "Collection Title",
            "Collection Description [mandatory but can be added at later stage]",
            "Collection Description [mandatory but can be added at later stage]",
            "CollectionInventory",
        ],
        [
            "C46",
            "BL",
            "a",
            "C46 title",
            "C46 description a",
            "C46 description b",
            "1 cylinder",
        ],
        ["C62", "BL", "a", "C62 title", "C62 description", "", "2 cylinders"],
        ["C80", "BL", "a", "C80 title", "C80 description", "", "3 cylinders"],
    ];
    data.forEach((d) => sheet.addRow(d));
    await workbook.xlsx.writeFile(
        path.join(__dirname, "test", "metadata.xlsx")
    );

    try {
        await dataLoader.load();
    } catch (error) {
        expect(error.message).toMatch(`Unable to find the folder`);
    }

    await remove(path.join(__dirname, "test"));
});

test("it should fail because a collection sheet can't be found", async () => {
    await ensureDir(path.join(__dirname, "test"));

    let workbook = new Exceljs.Workbook();
    let sheet = workbook.addWorksheet("Collection metadata");

    let data = [
        ["087", "091", "093", "312", "490", "490", "531"],
        [
            "Shelfmark [mandatory]",
            "Location of Original",
            "Format code",
            "Collection Title",
            "Collection Description [mandatory but can be added at later stage]",
            "Collection Description [mandatory but can be added at later stage]",
            "CollectionInventory",
        ],
        [
            "C46",
            "BL",
            "a",
            "C46 title",
            "C46 description a",
            "C46 description b",
            "1 cylinder",
        ],
    ];
    data.forEach((d) => sheet.addRow(d));

    for (let code of ["C46"]) {
        await ensureDir(path.join(__dirname, "test", code));
        await ensureFile(path.join(__dirname, "test", code, "a.mp3"));
        await ensureFile(path.join(__dirname, "test", code, "b.mp3"));
        await ensureFile(path.join(__dirname, "test", code, "c.mp3"));
        data = [
            ["087", "091", "093", "312", "490", "490", "531"],
            [
                "Original filename [mandatory]",
                "MD-ARK",
                "Format Code",
                "Mimetype",
                "File size",
                "Collection Title",
                "Shelfmark",
                "Description",
                "Description",
            ],
            [
                "a.mp3",
                "ark:a",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} a title`,
                `${code}/a`,
                "description a",
                "description a2",
            ],
            [
                "b.mp3",
                "ark:b",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} b title`,
                `${code}/b`,
                "description b",
                "description b2",
            ],
            [
                "c.mp3",
                "ark:c",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} c title`,
                `${code}/c`,
                "description c",
                "description c2",
            ],
        ];
        sheet = workbook.addWorksheet(`bad name`);
        data.forEach((d) => sheet.addRow(d));
    }
    await workbook.xlsx.writeFile(
        path.join(__dirname, "test", "metadata.xlsx")
    );

    const dataLoader = new DataLoader({
        dataPath: path.join(__dirname, "test"),
    });
    try {
        await dataLoader.load();
    } catch (error) {
        expect(error.message).toBe(
            `A sheet named 'C46 Recording metadata' was not found.`
        );
    }

    await remove(path.join(__dirname, "test"));
});

test("it should verify a good path", async () => {
    await ensureDir(path.join(__dirname, "test"));
    let workbook = new Exceljs.Workbook();
    let sheet = workbook.addWorksheet("Collection metadata");

    let data = [
        ["087", "091", "093", "312", "490", "490", "531"],
        [
            "Shelfmark [mandatory]",
            "Location of Original",
            "Format code",
            "Collection Title",
            "Collection Description [mandatory but can be added at later stage]",
            "Collection Description [mandatory but can be added at later stage]",
            "CollectionInventory",
        ],
        [
            "C46",
            "BL",
            "a",
            "C46 title",
            "C46 description a",
            "C46 description b",
            "1 cylinder",
        ],
        ["C62", "BL", "a", "C62 title", "C62 description", "", "2 cylinders"],
        ["C80", "BL", "a", "C80 title", "C80 description", "", "3 cylinders"],
    ];
    data.forEach((d) => sheet.addRow(d));

    for (let code of ["C46", "C62", "C80"]) {
        await ensureDir(path.join(__dirname, "test", code));
        await ensureFile(path.join(__dirname, "test", code, "a.mp3"));
        await ensureFile(path.join(__dirname, "test", code, "b.mp3"));
        await ensureFile(path.join(__dirname, "test", code, "c.mp3"));
        data = [
            ["087", "091", "093", "312", "490", "490", "531"],
            [
                "Original filename [mandatory]",
                "MD-ARK",
                "Format Code",
                "Mimetype",
                "File size",
                "Collection Title",
                "Shelfmark",
                "Description",
                "Description",
            ],
            [
                "a.mp3",
                "ark:a",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} a title`,
                `${code}/a`,
                "description a",
                "description a2",
            ],
            [
                "b.mp3",
                "ark:b",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} b title`,
                `${code}/b`,
                "description b",
                "description b2",
            ],
            [
                "c.mp3",
                "ark:c",
                "a",
                "audio/mpeg",
                "100KB",
                `${code} c title`,
                `${code}/c`,
                "description c",
                "description c2",
            ],
        ];
        sheet = workbook.addWorksheet(`${code} Recording metadata`);
        data.forEach((d) => sheet.addRow(d));
    }
    await workbook.xlsx.writeFile(
        path.join(__dirname, "test", "metadata.xlsx")
    );

    const dataLoader = new DataLoader({
        dataPath: path.join(__dirname, "test"),
    });
    data = await dataLoader.load();
    expect(data).toHaveProperty("collections");
    expect(data).toHaveProperty("items");
    expect(Object.keys(data.items).length).toBe(3);
    // console.log(JSON.stringify(data, null, 2));
    expect(data.items.C80[0]).toEqual({
        "Original filename": ["a.mp3"],
        "MD-ARK": ["ark:a"],
        "Format Code": ["a"],
        Mimetype: ["audio/mpeg"],
        "File size": ["100KB"],
        "Collection Title": ["C80 a title"],
        Shelfmark: ["C80/a"],
        Description: ["description a", "description a2"],
    });
    await remove(path.join(__dirname, "test"));
});
