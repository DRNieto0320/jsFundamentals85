/*When you work with arrays, it is easy to remove elements and add new elements.
This is what popping and pushing is:
Popping items out of an array, or pushing items into an array.
*/

//! The push() method adds a new element to an array (at the end):

//Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

//  The push() method returns the new array length:

//Example
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");   //  the value of x is 5