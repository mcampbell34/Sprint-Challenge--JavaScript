// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: This works because you are not redeclaring a variable that has already been decleared. The code on the 9 (console.log(external);) is taking the input from the parent variable to log the messgage which doesn't interfere with the varible being declared inside the function. 



/* Task 2: Counter */


/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function sumation(count){
  let counter=0;
for(let i=0; i<=count; i++){
counter+=i;
}
return counter;
}

console.log(sumation(4)) 