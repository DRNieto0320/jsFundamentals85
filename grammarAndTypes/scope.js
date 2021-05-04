let callback = (x) => {
    if(x % 2 == 0){
        console.log("this is even");
    }else if(x % 2 == 1){console.log("this is odd");
    }else{ console.log("what is this");
}
// Use this area to solve the challenge!
}

for(let i=0;i<=10;i++){
    console.log(i);
    callback(i);
}
// Test your callback function with the loop here!
// Please do not modify this!
module.exports = callback;



//  1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2).



//  2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.

//let callback=(i)=>{

//}



//  3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.