//Different ways to create an Object --

//Using Object (God Object)  constructor

const obj=new Object();
obj.name="john"
obj["age"]=99
console.log(obj);


// second away 

const obj1={age:23}
console.log(obj1);


// Third away using constructor function -->
// A constructor function is a special type of function 
//used to create an object ,and it doesnt return anything

function Animals(hands,legs){
  this.hands=hands;
  this.legs=legs;

  // this here is representing the object that would be created with this constructor function

  
  
}

const human=new Animals(2,2);
console.log(human);
const cat=new Animals(0,4);
console.log(cat);

// fourth way

// class -->tomorow

// fifth way 
/// Object.create()
// its actually a way to do inheritance in JS 





-----const obj={
  getHelloWorld:function(){
    console.log("hello world")
;    
  },

  getGoodMorning:function(language){

    if(language=="spanish"){
          console.log("spanish good morning guys")
    }
    else if (language=="hindi"){
                console.log("shubh prabhat")

    }

;    
  },


}

const myobj=Object.create(obj);

myobj.getGoodMorning("spanish");


<--------------------------------------------->
  
  
  let arr=[1,2,3,4,5];
arr.forEach(function(ele){
  console.log(ele);
})

//
Object.prototype.myOtherFavFunction=function(){
  console.log("ding dong 222222");
}
Array.prototype.myFavfunction=function(){
  console.log("ding dong");
}

const arr2=[2,3,4,4,8];
const arr3=["sjsjsjs","hello"];
arr3.myFavfunction();
arr3.myOtherFavFunction();


<-------------------------------------------------------->
  
  //Accessing Parent attributes from child objects
const grandParent={
  land:"2 acres land"
}


const father=Object.create(grandParent);

father.land="4 acres land";

//console.log(father.land) //??
//console.log(father.__proto__.land);

const child =Object.create(father);
child.land="7 acres land";

//console.log(child.prototype);

//console.log(child.land);
//console.log(child.__proto__.__proto__.land);// ??

//prototype --->
//__proto__


// prototype property always exists with constructors;

// __proto__ exists with every object


function Animals(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

let cat=new Animals(4,0);
var Arnab=new Animals(2,2);

//console.log(Animals.prototype);
//console.log(cat.__proto__)
//console.log(cat.__proto__===Animals.prototype)

Animals.prototype.greet=function(){
  console.log("good morining");
}
Arnab.__proto__.greet2=function(){
    console.log("good evening");
}


cat.greet();
cat.greet2();


<------------------------------------------------------>
  
  //classes in js --
// class is just a syntactical sugar

function Animals(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

Animals.prototype.greeting=function(){
  console.log("hhuu")
}

let cat=new Animals(4,0);
var Arnab=new Animals(2,2);

//console.log(cat,Arnab);
console.log(cat.__proto__===Animals.prototype)
Arnab.greeting();

class Animal{

  constructor(legs,hands){
      this.legs=legs;
  this.hands=hands;
  }

  greet2(){
    console.log("hhiii")
  }

  
}

console.log(Animal.prototype);

let cat2=new Animal(4,0);
var Arnab2=new Animal(2,2);
//console.log(cat2,Arnab2);

console.log(cat2.__proto__===Animal.prototype)

cat2.greet2();
