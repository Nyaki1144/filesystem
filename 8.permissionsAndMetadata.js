import fs from "node:fs/promises";
import __dirname from "./path.js";
import path from "path";

const fileName = "data.json";
const filePath = path.join(__dirname, fileName);

const metadata = await fs.stat(filePath);

console.log(`File: ${fileName}`);
console.log(`Size: ${metadata.size} bytes`);
console.log(`Created: ${metadata.birthtime}`);
console.log(`Modified: ${metadata.blksize}`);

fs.chmod(filePath, 0o400);
