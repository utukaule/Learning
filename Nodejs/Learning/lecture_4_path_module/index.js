import path from 'path'


// join two or more file
const fullPath =  path.join('/path','index.py','file.java')
console.log("file path:-", fullPath)

// index.js test.java

// absolute path
const absolutePath = path.resolve();
console.log("this is absolute path",absolutePath)




// extension name
const extname = path.extname('resume.apdf')
console.log(extname)

if(extname == ".pdf"){
    console.log("supported")
}
else{
    console.log("Not ok")
}