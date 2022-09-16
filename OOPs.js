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



<!------------------------------------------------------------------>

//classes and inheritance 
//constructor function 
/*
function Animal(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}


const human=new Animal(2,2);
console.log(human);


*/

class Animal{
  constructor(legs,hands){
  this.legs=legs;
  this.hands=hands;
  
}

  getHands(){
    return "hola";
  }
  
}

//const human=new Animal(2,2);
//console.log(human);

class Birds extends Animal{
   constructor(){
    // super();
  
  
}

   getHands(){
    return "hello there";
  }

  }

 
  


class Penguin extends Birds{
   constructor(){
     super();
  
  
}
  
  
}

const bird=new Penguin();
console.log(bird.getHands());


<!------------------------------------------------------------>

class GrandParent{
  constructor(land ,home){
    this.land=land;
    this.home=home;
    
  }

  getLand(){
    console.log("Grandfather object");
  }

  
}

//const grandfather=new GrandParent(2,3);

//const father=Object.create(grandfather);
/*
father.getLand=function(){
  console.log("fathers land")
}
*/
//father.getLand();

//const grandfather2=new GrandParent(20,30);
//console.log(grandfather,grandfather2)

class Father extends GrandParent{

    constructor(land,home){
      super(land,home); // will create the Grandparent object internall for every contructor call of Father
      // super just calls the parent class constructor
   
  }

    getLand(){
    console.log("Father Object");
  }
  
}

//const gp=new GrandParent(); // always

class Child extends Father{

    constructor(land,home){
      super(land,home); // will create the Grandparent object internall for every contructor call of Father
      // super just calls the parent class constructor
   
  }

    getLand(){
    console.log("Father Object");
  }
  
}


const father_=new Father();
console.log(father_.getLand());








<!--------------------------------------------------->


class Animal{

  hand=2;  //private ,you cant access them directly (the fields starting with # are private fields)
  #leg;
  tail=0;
  

  constructor(hand,leg,tail){
    this.hand=hand;
    this.#leg=leg;
    this.tail=tail;
    
  }

  getHand(){
    return this.hand;
  }
 
  
}

const animal=new Animal(2,3,1);
console.log(animal.#tail);
//console.log(animal.getClass());
//console.log(Animal.name)


<!--------------------------------------------->


//oops -->object oreiented programming system
//inheritance --->re usability -->
// abstraction
//polymorphism

class Restaurant{
  #kitchen_chickentikka="Goodfood";
  #kitchen_paneerlababdar="Good food";

  getThroughWaiter(){
    return this.#kitchen_chickentikka
  }

  
  

  
}

const tajrestaurant=new Restaurant();
console.log(tajrestaurant.getThroughWaiter());
//console.log(tajrestaurant.#kitchen_chickentikka)


<!--------------------------------------------------------->

// You need to use the concept of polymophism. You need to create a parent class 'shape' which returns the area. Create different classes circle,rectangle, sqaure and triangle which extend the parent class shape and calculate the area.

// create  a method allShapes that receives an array of shapes and returns cumulative area value of all passed shapes.
// You may diplay in HTML or console log your outputs.

class Shape {
  area() {
    return 0;
  }

  allShapes(arrOfArea) {
    let sum = arrOfArea.reduce((acc, ele) => {
      acc += ele;
      return acc;
    }, 0);

    return sum;
  }
}

//Circle
class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }
  area() {
    return this.radius * this.radius * 3.14;
  }
}

//Square
class Square extends Shape {
  constructor(s) {
    super();
    this.side = s;
  }
  area() {
    return this.side ** 2;
  }
}

//Rectangle
class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }
  area() {
    return this.width * this.height;
  }
}

//Triangle
class Triangle extends Shape {
  constructor(b, h) {
    super();
    this.base = b;
    this.height = h;
  }
  area() {
    return (this.base * this.height) / 2;
  }
}

// Area of all shape
let circle = new Circle(5).area();
let square = new Square(4).area();
let triangle = new Triangle(2, 3).area();
let rectangle = new Rectangle(4, 5).area();

let cumulative = new Shape().allShapes([circle, square, triangle, rectangle]);

console.log(cumulative);



