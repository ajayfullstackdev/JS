//Array and Array methods in JS -->
//push 
//pop
//shift 
//unshift
//slice
//splice
//join
//forEach
//concat
//indexOf


//----reduce ,map,filter,fill,find ,spread operator //includes //reverse replace //sort

//let  arr=[1,2,3,4,5,6,7];

//push is used to insert an element at the end of an array

//arr.push(44);

//console.log(arr);

//pop is used to get the last item of an array
// and also it removes the last item as well
//let rem=arr.pop()
//console.log(arr.pop());
//console.log(rem);
//console.log(arr);

//arr[3]=890;
//console.log(arr);


// unshift will push to the beginning of an array
//arr.unshift(789);  

//console.log(arr);
//shift will remove the first element of an array and returns it

//console.log(arr.shift());

//console.log(arr);

//slice method it gives you the part of an array 
// from begiining index till the end index ,end index is not included ,and it doesnt modify the original array

let slc=arr.slice(0,3);
console.log(slc);
console.log(arr);  //original array is not modified


//splice method also does the same thing that slice does\
// but it modifies the original array

//let splc=arr.splice(0,3);
//console.log(splc);
//console.log(arr);  //original array is  modified


// How to insert an element at a particular position in an array 


function insertItem(arr,index,number){

  //[1,2,3,4,5] //slice or splice 

//slice way

  let slicedArray=arr.slice(0,index);

  slicedArray.push(number);

  //console.log(slicedArray);

  let slicedArray2=arr.slice(index,arr.length);

 // console.log(slicedArray2);


 const newArray= slicedArray.concat(slicedArray2);

  //console.log(newArray);

  
return newArray;
  


  
}

//console.log(insertItem([1,2,3,4,5],2,99));




/*
const insertItem2 = (arr)=>{
  let b = arr.splice(3,7)
  let a = (arr.splice(0,3))
  a.push(33);
  let c = a.concat(b)
  return c;
}
console.log(insertItem2(arr))
*/

//join method --converts array into string 
//const greeting=["hi","people","how","are","you?"];

//let stringJoined=greeting.join("+");
//console.log(stringJoined);
//console.log(typeof 8);

//indexOf  gives you the index (position) of an element if it exists otherwise it returns -1;
//const arr = [4, 5, 8, 90,90, 80, 70, 30];

//console.log(arr.indexOf(50));


//forEach is just like forLoop ,only applicable for array
//used to iterate array elements -->
//just a replacement for loop
const arr=[1,2,2,8,9,8,7];


arr.forEach(function callback(arnab) {
  //console.log(arnab);
  
})


// A callback is a function which is passed as an argument to another function 

//whatever the question you had done with forloop use forEach in them
/*
let sum=0
arr.forEach(function callback(ele) {
  //console.log(arnab);
  sum=sum+ele;  // arr[i] ---->ele
  
})
console.log(sum);
*/
//Objects   /Object literals 

let obj={name:"Arnab",location:"WB",works:"SE",
        subjects:["JS","REACT"]
        
        }
console.log(obj.name);
console.log(obj["name"]);

console.log(obj.location);
console.log(obj["location"]);

console.log(obj.subjects);
console.log(obj["subjects"][0]);

console.log(Object.keys(obj));
console.log(Object.values(obj));


<!-------------------------------------------------->

.map - I have an array, I need another array where each item is based on the first one
	
.flatMap - like .map but I use it when each new item also an array
	
.filter - I have an array, I need less of it
	
.find - I have an array, I need one item from it
	
.findIndex - I have an array, I need the index of an item
	
.some - I have an array, I need to check if at least one item passes a check
	
.every - I have an array, I need to see if all items pass a check
	
.forEach - I have an array, I need to do something with each item. Usually I don't want to return anything
	
.reduce/.reduceRight - I have an array, I need to make it into "one value". I'll have to check if I really need to use reduce for this
	
for, for..in, for..of, while, do..while loops if the problem can't (or doesn't need to) fit into one of the above

<!----------------------------------------------------------------------->

// map will always return the array which has the length equals to input array
const arr=[1,2,3,4,5];
// map method has the inbuilt for loop
const arr1=arr.map(function(ele){
  return Math.pow(ele,2);
  
})

//console.log(arr1);

const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Brandie Lamb",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]

const ageArray=arrayofjson.map(function(ele){

 return {age:ele.age};

  
})

console.log(ageArray); //[45,61];

let af=[];
for(let i=0;i<ageArray.length;i++){
  af.push(ageArray[i].age);
  
}
console.log(af);
//console.log(ageArray); //[45,61];

<!------------------------------------------------->
//Repalce string in an array

const stringArr= ["abcd","efgc","pqrc"];



//console.log(stringArr.map(ele=>{
 // return ele.replace("c",77)
  
//}))


// /// Given an array ,["John","Bipasha","Sameer","Sweta"] you have to make first letter as Capital of
let firstC= ["john","bipasha","sameer","sweta"];

console.log(firstC.map(ele=>{
 // console.log(ele.slice(1));
return ele.charAt(0).toUpperCase()+ele.slice(1);
  
}))

console.log(firstC)

<!-------------------------------------->
const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Girish",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]

const ret=arrayofjson.find(ele=>{
  if(ele.name=="Girish"){
 
     return ele;
  }
<----------------------------------------------------->

//filter -->
// its is used to filter /extract the data fro existing array depending on some condition
// it can return the array which has length less than or equla to the original array 

const arrayofjson=[
  {
    "_id": "631c32b35b75bfdee1d61780",
    "age": 47,
    "name": "Brandie Lamb",
    "address": "269 Balfour Place, Maplewood, Utah, 7153"
  },
  {
    "_id": "631c32b3e1008421f14356fa",
    "age": 77,
    "name": "Sears Morton",
    "address": "267 Bush Street, Innsbrook, Palau, 9487"
  },
  {
    "_id": "631c32b3939c9dfbfa24a585",
    "age": 24,
    "name": "Marlene Glenn",
    "address": "701 Fleet Street, Terlingua, Montana, 2260"
  },
  {
    "_id": "631c32b351559667ecc47fc7",
    "age": 24,
    "name": "Dee Myers",
    "address": "416 Ainslie Street, Woodlands, Missouri, 2089"
  },
  {
    "_id": "631c32b30859aa8f313c9ea1",
    "age": 28,
    "name": "Lee Reid",
    "address": "627 Sullivan Street, Orovada, Guam, 9908"
  },
  {
    "_id": "631c32b3547bdf0420b682f3",
    "age": 11,
    "name": "Justice Gibbs",
    "address": "315 Leonard Street, Bennett, Iowa, 505"
  },
  {
    "_id": "631c32b3ca05bc00df23a791",
    "age": 45,
    "name": "Ginger Alford",
    "address": "811 Ditmas Avenue, Johnsonburg, Oregon, 9945"
  },
  {
    "_id": "631c32b3bebe75817e2bbea0",
    "age": 61,
    "name": "Lynn Wooten",
    "address": "998 Holt Court, Churchill, Mississippi, 2821"
  }
]


const filteredAge=arrayofjson.filter(function(ele){
  return ele.age>1;
})

console.log(filteredAge)

console.log(arrayofjson.filter(function(ele){
  return ele.name.startsWith("Z");
}))


const arrr= [1,2,3,4,57,88];
// get the elements which are divisible by2



let arrof2=[];

for(let i=0;i<arrr.length;i++){
  if(arrr[i]%2==0){
    arrof2.push(arrr[i]);
    
  }
  
}

console.log(arrof2)

console.log(arrr.filter(ele=>{
  return ele%2==0;
}));



<!----------------------------------------------->

// reduce

// 
let arr=[1,2,3,4,5,6];

let sum=0;

for(let i=0;i<arr.length;i++){
//  sum=sum+arr[i];
  sum+=arr[i];
  
}

console.log(sum);


const sum2=arr.reduce(function(acc,ele){
  return acc+=ele;
  
},0);

//const sum3=arr.reduce((acc,ele)=>acc+=ele);
//console.log(sum3);
//console.log(sum2);


//two sum ---> 
// 78
const arr2=[1,44,77,89,2,9,11];
/*
const obj={};

for(let i=0;i<arr2.length;i++){
  obj[arr2[i]]=i;
  
}
console.log(obj)

*/

const obj2=arr2.reduce(function(acc,ele,i){

  acc[ele]=i;
  return acc;
  
},{})

console.log(obj2);


const arr3=[1,23,4,5,6,7,87];
let numGr=[];
for(let i=0;i<arr3.length;i++){

  if(arr3[i]>4){
    numGr.push(arr3[i]);
    
  }
  
}

console.log(arr3.reduce(function(acc,ele){
   if(ele>4){
    acc.push(ele);
    
  }

  return acc;
},[]))


//--->  Homeowrk ---->   
const objarr=[
  {
    "_id": "631f410df05fc240b46721dc",
    "age": 93,
    "name": "Lessie Horton",
    "address": "638 Java Street, Geyserville, Ohio, 2535"
  },
  {
    "_id": "631f410d43ee8c20abf14e5c",
    "age": 85,
    "name": "Delaney Merritt",
    "address": "871 Florence Avenue, Cutter, Hawaii, 3674"
  },
  {
    "_id": "631f410d1b81c5239755078d",
    "age": 40,
    "name": "Vega Buck",
    "address": "652 Applegate Court, Odessa, Wisconsin, 7569"
  },
  {
    "_id": "631f410dac986f12dad5a071",
    "age": 51,
    "name": "York Mckenzie",
    "address": "633 Madeline Court, Barclay, Federated States Of Micronesia, 354"
  },
  {
    "_id": "631f410d36be2a8fbd9bffac",
    "age": 92,
    "name": "Downs King",
    "address": "553 Alton Place, Darbydale, Virgin Islands, 4747"
  }
]
// You have to use the reduce method ---->
// Calculate the sum of all the ages of object
// you have to get all the names of the elements 
// you have to get all the address of the elements
//Single object returned----> { ageSum:89,addreess:["553 Alton Place, Darbydale, Virgin Islands, 4747","633 Madeline Court, Barclay, Federated States Of Micronesia, 354"],names:["Downs King","York Mckenzie"],}





