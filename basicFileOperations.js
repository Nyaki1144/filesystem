import fs from "fs/promises";

try {
  await fs.writeFile("example.txt", "Hello, World!\n");
  await fs.appendFile("example.txt", "This is Node.js FS module.");
  const data = await fs.readFile("example.txt", "utf-8");

  console.log(data);
} catch (error) {
  throw new Error(error);
}
