import fs from "fs/promises";
import __dirname from "./path.js";
import path from "path";

const filePath = path.join(__dirname, "data.json");
const data = await fs.readFile(filePath, "utf-8");
const userData = JSON.parse(data);
console.log(userData, 69);
userData.push({
  name: "Inesa",
  age: 32,
});

fs.writeFile(filePath, JSON.stringify(userData));
