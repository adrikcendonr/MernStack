//to work with file systems we have fs module

let fs = require("fs")

//console.log("File read write operations starts")

//blocking/non-concurrent way to read file data
// let data = fs.readFileSync("./class.js","utf-8")

// console.log("file data ", data)  

//console.log("File read write operations ends")

//non-blocking/concurrent way to read file data

// console.log("File read write operations starts - async")

// fs.readFile("./class.js","utf-8",(err, data)=>{
//     console.log(err)
//     console.log(data)
// })

// console.log("File read write operations ends - async")


//Writing into a file using write stream

let userDetails = {
    name : "Julia",
    age : 21,
    city : "Miami ",
    session : "Psych"
}


//continues update in file, appending one after another
fs.readFile('Text.json','utf8',(err, fileData)=>{
        console.log("information" + fileData)
        let writerStream = fs.createWriteStream("Text.json","utf8");
        if (fileData) {           
            let oldData = JSON.parse(fileData)    
            console.log(oldData)
            writerStream.write(JSON.stringify([...oldData, userDetails]));
            writerStream.end();
        }else{
            writerStream.write(JSON.stringify([{ name : "Adrik",
                age : 22,
                city : "Orlando ",
                session : "CS"
            }]));
            writerStream.end();
        }
})

//one data and then replace the previous one
// let writerStream = fs.createWriteStream("Text.json","utf8");
// writerStream.write(JSON.stringify(userDetails));
// writerStream.end();

// writerStream.on("finish", ()=>{ //attached an event from eventemitter class
//     console.log("Writing into the file is done")

//     fs.readFile('Text.json','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

//         console.log("err", err);
//         console.log(JSON.parse(fileData));
    
//     });
// })

// writerStream.on("error",(erroObj)=>{
//     console.log(erroObj)
// })
// console.log("Read File Ends Using Writer Stream");


//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format
let MernStack = {
    M : "Mongo",
    E : "Express",
    R : "React",
    N : "Node"
}

let MeanStack = {
    M : "Mongo", 
    E : "Express",
    A : "Angular", 
    N : "Node"
}

fs.readFile('Acronym.json', 'utf-8',(err, data) =>
{
    console.log("Acronyms " + data)
    let writerStream = fs.createWriteStream('Acronym.json', 'utf-8');
    if(data){
        let prevData = JSON.parse(data)
        console.log(prevData)
        writerStream.write(JSON.stringify([...prevData, MeanStack]));
        writerStream.end();
    }
    else
    {
        writerStream.write(JSON.stringify([{M : "Mongo", E : "Express",R : "React",N : "Node"}]));
        writerStream.end();
    }
})
//REPL

//R - Read
//E - Evaluate
//P - Print
//L - Loop

//we need to stop it with ctrl+c cmd+c (sometimes we need to do it twice)