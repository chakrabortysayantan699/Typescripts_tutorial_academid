// it returns a number as both  parameters are number
function typos(a, b) {
    return (+a + +b);
}
function printResult(num) {
    console.log(num);
}
printResult(typos(10, 20));
//her we can point the fuction to a variable 
var coserv = typos;
//now we can acces the fuction via the varibale 
console.log(coserv(10, 30));
//val can point a function that have two number as its paramet
var val;
//val=high; it will give error
val = typos;
function high(m, n) {
    return (m.concat(n.toString()));
}
console.log(high("pap", "an"));
