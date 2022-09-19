// shallow and deep copy --->
//const y=[1,2,4,5]; // userdefined type
//const j=2;// number string ,boolean ,Symbol ,BigInt ,null and undefined
//const k=y;  // shallow copy -->

//  --->2 8 bytes  -->64 bit 


// 32 bytes
//k.push(8);
//40 bytes

//console.log(k);
//console.log(y);
/*
const obj={name:"Arnab",age:22};
const obj2=obj;  // shallow copy
const obj3={};


const returnedTarget = Object.assign(obj, obj3);
returnedTarget.age=99;  // shallow copy ---->
console.log(returnedTarget)
console.log(obj)
*/

// -->


//obj2.age=99;

//console.log(obj);// {name:"Arnab",age:99}
//console.log(obj2);//{name:"Arnab",age:99}

const obj={name:"John"};

// --->How to deep clone using spread operator ??
// JSON.stringify -->converts a Js object to  string (primitive)
// JSON.parse() -->converts a string (JSON string ) back to object

console.log(typeof JSON.stringify(obj))
console.log(typeof JSON.parse(JSON.stringify(obj)))
const obj2=JSON.parse(JSON.stringify(obj));  // deep copy  // separate meort
console.log("Initail Obj2",obj2);
obj2.name="hello";

console.log("final",obj2);
console.log("Obj1",obj);


https://gist.github.com/shubhamdixit863/f9aca19c683f90e39a7cc9105f2aa030


