

// it returns a number as both  parameters are number
function typos(a:Number,b:Number):Number// we can also declare that explicitly 
{
    return (+a +  +b);
}
function printResult(num:Number){
    console.log(num);
}
printResult(typos(10,20));
//her we can point the fuction to a variable 
 let coserv=typos
 //now we can acces the fuction via the varibale 
console.log(coserv(10,30));

//now  a type of a variable can be fuction 
type p=Function;
//val can point a function that have two number as its paramet
let  val:(m:Number,n:Number)=>Number;
//val=high; it will give error
val=typos;
function high(m:String,n:String) {
    return (m.concat(n.toString()));    
}
console.log(high("pap","an"));


