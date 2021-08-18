
/*ANY types*/
//any types are those mixture types 
let a:any[];
//it just ensure typescript will not check any types  the adavantages are gone 

a=['light',10,'fan']
console.log(a);

/* UNION */
// we can have our own types 
type p= String | Number;

//when we want specify a specific type to a variable like num1:Number but if the num1 can be string or number both only then we use use union(or) opretor  like num1:(number|string)
function add(num1: p , num2: p) {
  //if num1 and num2 are not numbers then this fuction will not execute 
  if(typeof(num1)==='string'){
      let asp=+num1 + +num2;
      //+ before any varibale trasforms the value of the variable in number 
      console.log('hey'+typeof(+num1));
      return (num1.concat(num2.toString()));
  }
  else if(typeof(num1)==='number' && typeof(num2)==='number'){
      console.log("h"+typeof(+num1));
      return (num1 + num2);
  } 
  
  
}
console.log(add(" String+string "+"pap","an"));
console.log(add('str+num '+"pap",10));
console.log(add('num+str '+10,"an"));
console.log("here "+add(10,20));




