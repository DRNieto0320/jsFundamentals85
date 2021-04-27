// String Properties
// - properties associated with this datatype
// - strings have only one property and that is the length property

let myName = "David";
console.log(myName.length);


// String Methods
// - methods are toools that can help us manipulate our data
// - .method() .property
// - methods are functions associated with datatypes

console.log(myName.toUpperCase());
// .toUppercase() will capitalize all letters

let home = 'My home in Indiana';
console.log(home.includes('indy'));
// .includes() will check if a certain string is included in another string

let sent = 'This sentence will be split into individual pieces';
console.log(sent.split(' ', 2));