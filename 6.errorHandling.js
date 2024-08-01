import fs from "node:fs/promises";

try {
  await fs.readFile("notExistFile.txt", "utf-8");
} catch (error) {
  throw new Error(error);
}
