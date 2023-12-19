var Username = "Adrik"

//COmpiled as well as interpreted language due to hoisting present in javascript

console.log(PrintUsername)

//node - is built using chromes v8 engine to run javascript on a server
function PrintUsername(param) {
    console.log(param)
}

//to execute js file run comand 
// node <filename> 

PrintUsername(Username)