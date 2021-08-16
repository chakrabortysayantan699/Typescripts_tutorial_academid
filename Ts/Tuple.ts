// tuple is look like array but it is fixed size array and we can control which postion what type vlaue tuple can carry

//first use tuple simply  in an object

const Ob_tup = {
  tup: ["hey!", 2],
};
console.log(Ob_tup.tup);
// now you can see type(tup)=(String|Number)[] means it can be array of strings or array of number

const OB_tup: {
  tup1: [String, Number];
} = {
  tup1: ["hi", 50],
  //tup1:[50,"hi"]
  //it will give some error  because at first it have number where tuple have string so it not maching the  declared types
};
//Exception : the push method can push items in the tuple
let p = OB_tup.tup1.push("hey");
console.log(p);
