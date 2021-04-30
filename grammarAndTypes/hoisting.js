// HOISTING

//      - First Pass: Stores our variables declaration (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there"), but does not assign them their values.
//      - Anything that needs to be hoisted, is hoisted.

//      - Second Pass: Assigns the values to our variables and executes any hoisted source code.

let myName = "Eric";
console.log (myName);
// console.log(randomVariable);

b()

function b(){
    console.log("I have been hoisted.");
}
