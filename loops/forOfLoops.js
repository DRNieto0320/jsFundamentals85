//FOR OF LOOPS - iterate over the values of an iterable object(strings and arrays included)


let student = {
    name:   "Jake from State Farm",
    awesome:    true,
    degree:     "Insurance Sales",
    age:        98
};
//This does not work because the properties are not 'iterable'
//for(item of student){
    //   console.log(item);
    //   console.log(student[item]);
 //      console.log(item+ " : "+student[item]);
//   };

let soupArray = ['potato', 'broccoli', 'carrot', 'chicken noodle', 'chili'];

for(soup of soupArray){
    console.log(soup);
}

