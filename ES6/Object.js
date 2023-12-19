// Object.create, new Object(), {} - there are some of the ways of creating object using Object Class
//inheritance, polymorphism (overriding)

var User = {
    Name : "Adrik",
    Age : 22,
    Session : "MERNStack",
    getUserDetails : function () {
        return {
            Name : this.Name,
            Session : this.Session,
            Address : this.Address,
            Specialtiy : this.Specialtiy
        }
    }
}

User.Address = "Somewhere on earth!!"

console.log(User.getUserDetails());

//1. Inherit using new keyword, which just creates a copy with reference - not recommended way when we need polymorphism

// var Employee =  new Object(User)

// Employee.Specialtiy = "Software Enggineer"
// console.log(Employee.getUserDetails())

// Employee.getSpeciality = function (params) {
//     return this.Specialtiy
// }

// console.log(Employee.getSpeciality())
// console.log(User.getSpeciality())

//2. Inherit using - Object.Create - this allows to have a separate copy and then used

var Employee =  Object.create(User)

Employee.Specialtiy = "Software Enggineer"
console.log(Employee.getUserDetails())

Employee.getSpeciality = function (params) {
    return this.Specialtiy
}

console.log(Employee.getSpeciality())
//console.log(User.getSpeciality()) //not a function in User

//overriding

Employee.getUserDetails = function(){
    return JSON.stringify(User.getUserDetails()) + "This is overridden in Employee class"
}

console.log(Employee.getUserDetails())

//this inheritance and polymorphism is possible due to prototype object

console.log(Employee.__proto__)

//3. Empty object will also have prtotyp object
var emptyObj = Object.create({})


console.log(emptyObj.__proto__)

//4. null on constructor to have no prototype
var nullObjPrototype = Object.create(null)


console.log(nullObjPrototype.__proto__)

//5. Merging objects

var User = {name : "Khan", add1 : "Lake City 1", mobile : "9898989889"}
var Address = {name : "Khan", add1 : "Wall Streetss", productName : "New product" }

var userDetail = {}

userDetail = Object.assign(userDetail, User, Address)

console.log(userDetail)


//Create an object with name Person and have some properties in it
// inherit person object to create new object Student - this should have two properties additional and one method
// create one object Jobs - (JobTitle, Salary, Location) and one object Student with salary
// Merge person and Salary so that Salary comes from Jobs Object
// Create a null - prototype object

var Person = {
    Name : "Julia",
    Age : 21,
    Address : "2619 palisade",
    EyeColor : "Brown",
    getUserDetails : function (){
        return {
            Name : this.Name,
            Age : this.Age, 
            Address : this.Address,
            EyeColor : this.EyeColor
        }
    }
}

console.log(Person.getUserDetails())

var Student = Object.create(Person)

Student.SchoolID = 194821
Student.Salary = 80000

Student.getSchoolID = function (params){
    return this.SchoolID
}

console.log(Student.getSchoolID())

var Jobs = {
    JobTitle : "Astronaut",
    Salary : 45000,
    Address : "Miami",
}

var superUser = {}

superUser = Object.assign(superUser, Student, Jobs)

console.log(superUser)
var nullObjPrototype = Object.create(null)


