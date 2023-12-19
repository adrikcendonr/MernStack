// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

 const heroes = [
   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
   { name: 'Batman',         family: 'DC Comics', isEvil: false },
   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//heroes who are not evils
let notEvil = heroes.filter(hero=> hero.isEvil == false)
console.log(notEvil)

//unique family names
let uniqueFamily = new Set()
heroes.forEach(hero => uniqueFamily.add(hero.family))
console.log(uniqueFamily)

//print and append sir
let sirHeroes = heroes.map((hero)=>{
    return{
        "Hero name" : "sir" + hero.name
    }
}).filter(person=> person!=undefined)
console.log(sirHeroes)

//marvel hero not evil
let marvelEvil = heroes.some(hero=> hero.family == "Marvel" && hero.isEvil == false)
console.log(marvelEvil)

console.log('---------------------')

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//map
let studentRoster = new Map();

//sets values
studentRoster.set(1, "Adrik")
studentRoster.set(2, "Julia")
studentRoster.set(3, "Arianne")
studentRoster.set(4, "Eva")
studentRoster.set(5, "Alex")

//tells us the size 
console.log(studentRoster.size)

//gets the value with the key 4
console.log(studentRoster.get(4))

studentRoster.delete(5)

studentRoster.clear()
console.log(studentRoster.size)

//set

let groceryList = new Set();

groceryList.add("Bananas")
groceryList.add("Apples")
groceryList.add("Milk")
groceryList.add("Bread")
groceryList.add("Steak")
groceryList.add("Milk")

console.log(groceryList.has("Bread"))

console.log(groceryList.size)

groceryList.delete("Bananas")

console.log(groceryList)

groceryList.clear

console.log('--------------------')
//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

let myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(["Iterators, Spread and Rest, Destructuring, Forin/Forof, Promise"])
    }, 2000);

    setTimeout(() => {
        reject("Error.")
    }, 3000);
})

myPromise.then((data, error)=>{ // in case when call is successfull
    console.log(data)
}).catch((error)=>console.log(error)) 

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
let numbersList = [4,8,6,9,12,15]
function multiply(...numbers){
    let product = 0

    product = numbers.reduce((prevVal, currVal)=> prevVal * currVal, 1)

    return product
}
console.log(multiply(...numbersList))

let sessionStudents = ["Adrik, Joseph, Khan, Annie, Bryan, Queen"]
console.log("Session students are: ")
console.log(...sessionStudents)



//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
     }
}

let { userDetails = {first, last, contactNumber : 9119119110}} = person
console.log(userDetails.last)

console.log('---------------------')
//6. Give me an example of const data manipulation
const Player = {
    team : "marlins",
    born : 2001,
    salary : 100000
}
Player.salary = 180000
console.log(Player)

console.log('---------------------')
//7. What is the difference between for-of and for-in show with examples
//for..in iterates over all enumerable property keys of an object while for..of iterates over the values of an iterable object. 
//Examples of iterable objects are arrays, strings, and NodeLists.
let numbers = [1,2,3,4,5]
numbers[5] = 6
for(num of numbers){
    console.log(num)
}

console.log("-----------------")

for(num in numbers){
    element = numbers[num]
    console.log(element)
}

//8. Give me an example of bind and write its usage, comparison with arrow function
/*bind is a method to set the 'this' context of a function, while arrow functions 
inherently capture the 'this' value of the enclosing context because they are lexically scoped, 
providing a cleaner solution in cases where this needs to remain consistent*/
let Employee = {
    name : "Adrik",
    company : "Microsoft",
    birthYear : 2001,
    PrintDetails : function(){
        setTimeout(function name(){
            console.log(this.name + " works at " + this.company + " and was born in " + this.birthYear)
        }.bind(this),4000)
    }
}

Employee.PrintDetails()

let Worker = {
    name : "Julia",
    company : "Google",
    birthYear : 2002,
    PrintDetails : function(){
        setTimeout(()=>{
            console.log(this.name + " works at " + this.company + " and was born in " + this.birthYear)
        },5000)
    }
}

Worker.PrintDetails()

//9. Create an example showing usage of event loop in concurrent execution cycle
console.log("First Call")

setTimeout(()=>{
    console.log("Second Call")
},1000)

console.log("Third Call")

setTimeout(()=> {
    console.log("Fourth Call")
},0)

console.log("Last Call")
/*In this example I am calling three of these functions synchronously and then 2 asynchronously. We can see by running it 
that even though the second call is made after the first one, it is placed on the event loop. Similarly even though the fourth 
call has a 0 second wait time it will also go to the call stack. ALl of the synchronous calls will run first and then the callbacks
are made from the event queue.*/

//10. create an example showing usage of short hand, default param and template literal
function createStudent(name, age = 18, session){//default param
    return{
        name, //shorthand
        age,
        session,
        printInfo : function(){
            return `${name} is ${age} years old and is currently enrolled in ${session} session` //template literal
        }
    };
}

let FirstStudent = createStudent("Adrik", 21, "Java")
console.log(FirstStudent.printInfo());


