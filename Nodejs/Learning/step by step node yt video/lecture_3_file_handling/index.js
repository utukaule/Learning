import { readFile, writeFile, appendFile,mkdir } from "fs/promises";

// read File
const read_file = async (fileName) => {
  const date = await readFile(fileName, "utf8");
  console.log(date);
};
read_file("./text.txt");


// create and write file
const write_file = async (filename, content) => {
  await writeFile(filename, content);
  console.log("file created succefully");
};

write_file("ai.py", "hi this is python");


// update file
const append_file = async (filename, content) => {
  await appendFile(filename, content);
  console.log("file updated successfully");
};
appendFile("./text.txt", "this is new update");


// create folder
const mk = async (dir) => {
  await mkdir(dir,{recursive:true});
};

mk("public/components");


