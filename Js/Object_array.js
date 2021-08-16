//Object Properties
//1. simple objet without type declaring of object
var person = {
    name: "Sayantan",
    age: 22
};
// output
console.log(person.name);
//2.object with declaring types
var person1 = {
    name: "Sayantan",
    //name:32   if we give othe types except specific types ,it will throw an error
    age: 22,
    degree: "BSC"
};
//for output
console.log(person1.age);
console.log(person1.degree);
//2. Arrays in objects
var person_array = {
    name: "sayantan",
    age: 22,
    degree: "BSC-CS",
    hobbies: ["Travelling", "Eating", "Sleeping"]
};
//output
console.log(person_array.hobbies);
//Declaring array Types
var array_type = {
    name: "Sayantan",
    age: 22,
    hobbies: ["Travelling", "Eating", "Sleeping"],
    data: [1, "i", 5.7, true]
};
console.log(array_type.data);
