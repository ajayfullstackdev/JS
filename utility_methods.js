//utility methods --->
//rest paramater 
// spread operator 
// tagged template literals 
// closures
// sort --->

//variadic functions-->

// variadic --->they can take n number of arguments

function foo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){
 console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n) 
}

// variadic function 
function foo2(...args){ //rest operator is always with the function
 for(let i=0;i<args.length;i++){
 //  console.log(args[i]);
 }
  
}

foo2(2,3,3,47,89,11,2,89,08,1);
//
// spread operator --->
let arr2=[1,2,3,4,5,8];
{
  let str="Arnab";
  let obj={};
for(let i=0;i<str.length;i++){
  obj[i]=str[i]
  
}
}


//console.log(...arr);
//console.log([...str]);
//console.log({...str});
//console.log(obj);
/*
function bar(a,b,...args){
 console.log(args,a,b); 
}
bar(2,3,4,7,8,9)
*/
function bar(a,...args){  //rest syntax
  console.log(args);

  if(a==0){
    return a;
    
  }
  return bar(a-1,...args)  // spread syntax
  
}
//console.log(...arr)
//console.log(bar(7,8))

function sum(...args){
console.log(args[2]+args[3]);
  return args.reduce((acc,ele)=>acc+ele);
}

function sum2(a,b,c,d,e,f,g,h){

  return a+b+c+d+e+f+g+h;
}

//console.log(sum(2,3,43,4,4,5,558,99));
//console.log(sum2(2,3,43,4,4,5,558,99));


let arr=["arnab","71","WB","22","180"];

// My name is arnab and I got 71 percent in my engg and I belong to WB and I am of 22 years old and my height is 180cm
let str="My name is "+arr[0]+" and I got "+arr[1]+"percent marks";

function taggedFunc(staticString,...dynamicstring){
  
  staticString=staticString.map(ele=>ele.toUpperCase())
    dynamicstring=dynamicstring.map(ele=>ele.toLowerCase())

  
  return staticString.join(",")+dynamicstring.join(",");
}
""
''
``
let str2=taggedFunc `My name "is" ${arr[0]} and I got ${arr[1]} percent in my engg and I belong to ${arr[2]} and I am of ${arr[3]} years old and my height is ${arr[4]} cm`


console.log(str2);
 

 // console.log(str2);

  


//console.log(str);


<!------------------------------>

//sort --->

//Array.prototype.sort // 
// only applicable to array

const arr=[100,2,3,4,5,6,79];

//console.log(arr.sort());
// ["100","2","3","4","5","6","79"];

//const arr2=["A","C","E","D","B"];
//console.log(arr2.sort());

let output=arr.sort(function(a,b){


  // depending on the return value of this function 
  // the elements are sorted in ascending order
  // or in descending order
if(a>b){   
  return 1   // sort a after b
}
  else if(a<b){ // b-a  --->negative --
    return -1   //sort a before b 
  }
  else{
    return 0
  }
  
})
console.log(output)
//Descending order
let outputdescending=arr.sort(function(a,b){


  // depending on the return value of this function 
  // the elements are sorted in ascending order
  // or in descending order
if(a>b){
  return -1   // sort a after b
}
  else if(a<b){
    return 1   //sort a before b 
  }
  else{
    return 0
  }
  
})


console.log(outputdescending)

//c//onsole.log(output);

//let arr2=[100,2,3,4,5,6,79];



//let sorted= arr2.sort()



//console.log(sorted)


const arr3=[1,2,3,4,4,89,78,12];

console.log(arr3.sort(function(a,b){
  return b-a;  // it will sort in descending order
  // return a-b // it will sort in ascendng order
  
}))

// a>b ----> a-b --->the value will always be positive   1 would be returned

// a<b  ---> a-b    ---->value will always be negative ---> -1 would be returned


const arrofObj=[
  {
    "_id": "63247e49d4ef131571dcf85b",
    "age": 14,
    "name": "Levy Gregory",
    "address": "168 Dean Street, Barrelville, New Hampshire, 3764"
  },
  {
    "_id": "63247e49593070b9e2e89e85",
    "age": 48,
    "name": "Duffy Prince",
    "address": "197 Ditmars Street, Tecolotito, West Virginia, 8670"
  },
  {
    "_id": "63247e49393771716f8b6997",
    "age": 74,
    "name": "Lauri Carpenter",
    "address": "731 Sutter Avenue, Fannett, Michigan, 9293"
  },
  {
    "_id": "63247e49379fdd6e9c9929a9",
    "age": 72,
    "name": "Shelby Whitley",
    "address": "458 Tompkins Place, Newcastle, Hawaii, 5929"
  },
  {
    "_id": "63247e49a189bc33c985f59c",
    "age": 67,
    "name": "Sweeney Conley",
    "address": "643 Estate Road, Floris, Wisconsin, 7871"
  },
  {
    "_id": "63247e494f93727ce951b175",
    "age": 50,
    "name": "Jeri Andrews",
    "address": "100 Oak Street, Bluffview, Nevada, 1664"
  },
  {
    "_id": "63247e4958ccf62fdf8dc8dc",
    "age": 56,
    "name": "Hatfield Baxter",
    "address": "935 Canarsie Road, Gwynn, South Dakota, 5398"
  },
  {
    "_id": "63247e49b302999cd2e7696a",
    "age": 87,
    "name": "Morrison Evans",
    "address": "889 Clarkson Avenue, Emison, Pennsylvania, 8508"
  }
]
//selection o(N2)
// O(Nlogn);

setTimeout(()=>{
  console.log(arrofObj.sort((a,b)=>{

  // a-b -->ascending order
  // b-a -->descending order --->
  return b.age-a.age;  //localCompare
  
}))
  
},1000)




