import fs from "node:fs/promises";
import __dirname from "./path.js";
import path from "path";

const dirPathOld = path.join(__dirname, "forCopy", "dir1");
const dirPathNew = path.join(__dirname, "forCopy", "dir2");
const data = await fs.readdir(dirPathOld, { recursive: true });
console.table(data);

fs.cp(dirPathOld, dirPathNew, { recursive: true }, (err) => {
  if (err) throw new Error(err);
  console.log("Copy has been successful!");
});
