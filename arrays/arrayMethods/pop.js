//! the pop method is similar to the shift method
//! except it removes the last element from an array and returns it
//! this method will change the length of the array

const array = [10,'student', 'cake', -78, 'Zebra'];
console.log("Before: ", array);

const lastItem = array.pop();

console.log("After: ", array);
console.log("Popped item: ", lastItem);

/*When you work with arrays, it is easy to remove elements and add new elements.
This is what popping and pushing is:
Popping items out of an array, or pushing items into an array.
*/

//The pop() method removes the last element from an array:

//Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // Removes the last element ("Mango") from fruits

//The pop() method returns the value that was "popped out":

//Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();      // the value of x is "Mango"