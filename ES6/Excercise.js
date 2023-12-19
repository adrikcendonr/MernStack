//1. What would be answer to this - why
console.log("Before: ", a);
var a = 10;
console.log("After: ", a);


//2. Global Scope - what should be the issue - in logging - a

function hoistExample() {
  var a;
  a = 10;
}

hoistExample();
console.log(a); 

//3. Figure out the problem

var testFunc = function funcHoist() {
  console.log("I am being hoisted.");
}	
testFunc();


//4. SetTimeouts - concurrent executions

setTimeout(function(){
    console.log("first timeout");
    setTimeout(function(){
        console.log("inner timeout");			
    },0);	
    
    setTimeout(function(){
        console.log("second timeout");
    },100);
    
    setTimeout(function(){
        console.log("third timeout");
    },100);
},100);

//5. Function Hoisting - see and understand the out put
console.log(funcs);
var funcs;
function funcs(){
    funcs = 3;
}
funcs();
console.log(funcs);


//6. Function Hoisting - see and understand the out put
console.log(funcs);
var funcs;
var funcs = function (){
    funcs = 5;
}
funcs();
console.log(funcs);


//7. See the OutPut of the following and try finding why it is so

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

console.log(sum(2,3));   // Outputs -
console.log(sum(2)(3));  // Outputs -


//8. Create a function to populate user details. 
//	func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic
var address = "1321 coral way"
function populateDetail(Name, Age, Topic, callBackFunction){
    console.log(address)
    callBackFunction(Name, Age,Topic)
}

function printDetails(Name, Age, Topic){
    console.log(Name, Age, Topic)
}

populateDetail("Adrik", 22, "JavaScript",printDetails)

