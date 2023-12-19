let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list

//1
let jsDevs = persons.filter(person=> person.tags == "javascript")
console.log(jsDevs)

//2
let javaDevs = persons.map((person)=>{
    if(person.tags == "java"){
        return{
            "Developer" : person.name + " programmer"
        }
    }
}).filter(person=> person!=undefined)
console.log(javaDevs)

//3
let pythonDevs = persons.some(person=> person.tags == "python")
console.log(pythonDevs)

console.log('-------------------')
//4
let uniqueLangs = persons.reduce((prevVal, currVal, index, list)=>{

    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1
    return prevVal

}, new Set())   

console.log(uniqueLangs)

