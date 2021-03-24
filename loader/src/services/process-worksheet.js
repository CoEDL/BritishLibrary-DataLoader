import path from "path";
import { DataLoader } from "./data-loader-service.js";
import { pathExists, ensureDir, ensureFile, copy } from "fs-extra";
const dataPath = "/Users/mlarosa/Desktop/true-echoes-latest";
const sourceAudioFile = path.join(dataPath, "C80", "025A-C0080X0446XX-0100M0.mp3");
const sourceImageFile = path.join(dataPath, "C80", "025A-C0080X0446XX-0100M0.mp3");

(async () => {
    const dataLoader = new DataLoader({
        dataPath: dataPath,
        mode: "development",
    });
    let data = await dataLoader.import();
    // console.log(JSON.stringify(data, null, 2));
    // console.log(data.collections);

    // ensure item folders exists - create if not
    for (let item of Object.keys(data.items)) {
        if (!(await pathExists(path.join(dataPath, item)))) {
            await ensureDir(path.join(dataPath, item));
        }
        for (let entry of Object.keys(data.items[item])) {
            for (let media of data.items[item][entry]) {
                let file = media["Original filename"][0];
                if (media["Format code"][0] === "a") {
                    if (!(await pathExists(path.join(dataPath, file)))) {
                        await copy(sourceFile, path.join(dataPath, file));
                    }
                } else {
                    await ensureFile(path.join(dataPath, file));
                }
            }
        }
    }
})();
