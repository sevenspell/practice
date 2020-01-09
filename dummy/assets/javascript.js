//1. first test for javascript
var content = document.querySelector("#content");
console.log(content);


//2. Understanding usage of global variables
var test
    //for the purpose of reusing function
function testFunction() {
    test = "i am hungry";
    console.log(test);
}
    //call function first so that console.log works
testFunction();
console.log(test);


//3. Understanding how to call the result from inside one function to use in another function

function testFunction2(){
    var test = "i am hungry";
    console.log(test);
    //returning result otherwise 'var result' will not work
    return test;
}

//logging result of function into a variable
var result = testFunction2();
console.log(result);


