//getting input from html file by using Id 
const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("button1")!;

//simple function for adding numbers and  specifying types of parameters 
function add(num1: number, num2: number) {
  //if num1 and num2 are not numbers then this fuction will not execute
  return num1 + num2;
}
//just a event listner for buuton
button.addEventListener("click", function () {
  //printing output in console
  console.log(add(+num1.value, +num2.value));
});
