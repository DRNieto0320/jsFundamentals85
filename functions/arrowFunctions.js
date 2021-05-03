//ARROW FUNCTIONS
//
  let hi=()=>{
    console.log("hi");
}

hi();
//
//  1: We need to set the fat arrow function to a variable.
//  2: We use the 'fat arrow' to signify its a function.
//
//  - arrow functions (fat arrow functions) introduced in ES6.
//      - a more concise way to write function expressions *not declarations*
//      - arrow function do NOT get hoisted.
//  - 2 types of arrow functions:
//      - Concise body
//      - Block body

//  Concise body
// let hi = () => console.log("hi");
// concise body arrow functions return by default.
// hi();

//  Block body
//      let hi = () => {
//          console.log("hi");  
//}
//  - Block body arrow functions must have a return in the body of the function (between the {})

let apples = x => console.log(`There are ${x} apples.`);
apples(10);
apples(120);
apples("too many damn");

let bananas = x => {
    console.log(`There are ${x} bananas`);
}
bananas (10);

//  if no or multiple parameters needed - use ()
//  do not need () if we are only passing 1 parameter.



