//Object Properties

//1. simple objet without type declaring of object
const person = {
  name: "Sayantan",
  age: 22,
};
// output
console.log(person.name);

//2.object with declaring types
const person1: {
  name: string; //here we are declaring specific types of the variable that we want to restrict
  age: number;
  degree: string;
} = {
  name: "Sayantan",
  //name:32   if we give othe types except specific types ,it will throw an error
  age: 22,
  degree: "BSC",
};
//for output

console.log(person1.age);
console.log(person1.degree);

//2. Arrays in objects

const person_array = {
  name: "sayantan",
  age: 22,
  degree: "BSC-CS",
  hobbies: ["Travelling", "Eating", "Sleeping"],
};

//output
console.log(person_array.hobbies);

//Declaring array Types
const array_type: {
  name: String;
  age: Number;
  hobbies: String[]; //it means it will a array of string
  //age:Number[] it can be array of number if any other type values are assigned to these varible it will show error
  data: any[]; // for mixed type of element array
} = {
  name: "Sayantan",
  age: 22,
  hobbies: ["Travelling", "Eating", "Sleeping"],
  data: [1, "i", 5.7, true], //mixed type of array
};
console.log(array_type.data);
