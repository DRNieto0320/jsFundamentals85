// FOR IN LOOPS

// - great for iterating over values in an object.
// - Properties in objects are what's called enumerable.
// - enumerable just means 'countable'.

let student = {
    name:   "Jake from State Farm",
    awesome:    true,
    degree:     "Insurance Sales",
    age:        98
};

for(item in student){
 //   console.log(item);
 //   console.log(student[item]);
    console.log(item+ " : "+student[item]);
};