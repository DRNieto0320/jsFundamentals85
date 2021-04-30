//  for (let i=0; i <= 10; i++){
//          console.log(i);
//      }

//let callback = (d) => {

//    console.log(`There are ${d} bananas`);
//}
//callback(d);


    //  let callback = (f) => {
        // Use this area to solve the challenge!
    //    }
        
        
        // Test your callback function with the loop here!
        
        
        
        
        // Please do not modify this!
    //    module.exports = callback;

//        let num;
//        for(let i = 0; i <= 10; i++) {
//            num = i;
//            if((i / 2)% 1 === 0) {
//                console.log(i+' - the number is even');
//                } else {console.log(i+" - the number is odd");
//            }
//        }

//  1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a function and accept the data from the for loop as a parameter(see step 2).

for(let k=0; k<=10; k++){
    console.log(k);
    callback(num);
}

//  2. Declare a function. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.

let callback = (num) =>{
    num = k;
    if((num/2)% 1 === 0){
        console.log("the number is even");
    }else{console.log("the number is odd");
}
}

//  3. Inside of the function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.






