import { writeFileSync, readFileSync, readFile, writeFile } from "node:fs";
import __dirname from "./path.js";
import path from "node:path";

const fileSyncPath = path.join(__dirname, "sync.txt");
const fileAsyncPath = path.join(__dirname, "async.txt");

writeFileSync(fileSyncPath, "Hello!!!!!");
const data = readFileSync(fileSyncPath);
console.log(data.toString());

writeFile(fileAsyncPath, "async Hello!!!!", (err) => {
  if (err) throw new Error(err);
});
readFile(fileAsyncPath, (err, data) => {
  if (err) throw new Error(err);
  console.log(data.toString());
});
