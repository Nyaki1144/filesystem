import fs from "fs/promises";
import __dirname from "./path.js";
import path from "path";

const testDir = path.join(__dirname, "testDir");
const filePath = path.join(testDir, "testFile.txt");
const newName = path.join(testDir, "renamedFile.txt");

await fs.mkdir("testDir", { recursive: true });
await fs.writeFile(filePath, "yeah boy!!!!!!!");
await fs.rename(filePath, newName);
await fs.rm(testDir, { recursive: true });
