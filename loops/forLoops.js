// LOOPS - offer us a quick and easy way to do something repeatedly, or loop over something. A loop has 3 parts: 1 - Initial expression. 2 - Condition. 3 - Increment expression.

//

//      1       2       3
//for (let i=0; i < 10; i++){
//    console.log(i);
//}

//for (x=0; x <= 20; x+=2){
//   console.log(x);
//}

//for(let i=0; i >= -24; i-=2){
//    console.log(i);
//}

//go through a name and display each letter individually
//let myName = "Isaiah";

//for(let i=0; i < myName.length; i+=1){
//    console.log(myName[i]);
//}

//Make a loop where you add up all numbers from 1 to 50

let sum = 0;
for(let i = 0; i <= 50; i += 1){
    sum += i;
}
console.log(sum);
