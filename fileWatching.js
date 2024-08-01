import fs from "node:fs";
import __dirname from "./path.js";
import path from "node:path";

const dirPath = path.join(__dirname, "watchDir");
const watcher = fs.watch(dirPath);

watcher.on("change", (data) => {
  console.log("directory has changed");
});

const filePath = path.join(dirPath, "text.txt");

fs.writeFile(filePath, "Hello!!!", (err) => {
  if (err) throw new Error(err);
  console.log("File added");
});

fs.rm(filePath, { recursive: true }, (err) => {
  if (err) throw new Error(err);
  console.log("File removed");
});

// watcher.close();
