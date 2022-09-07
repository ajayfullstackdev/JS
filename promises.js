// //errorfirst callback
// //Promises


// function apiCall(){
  
// }


 function getPs3(){
  const promise= new Promise(function(resolved,rejected){

//   // you can put some condition in here -->
//   // based on which either you can resolve the promise or you can reject the promise ---->
let result=apiCall();

   if(result>=90){
      resolved("success")
     }
    else{
      rejected("Error");
    }
    


  
  
 });

  return promise;
   }

getPs3().then(data=>{
  
}).catch(err=>{
  
 })

console.log(promise);


// callbackhell --->
//how promises solve that problem -->



// Call back hell simple example


//function getCityList(cb){
  //imitating the api call with setTimeout
 // setTimeout(()=>{
    //cb([{"name":"Kanpur",id:1,"name":"Lucknow",id:2}])
    
 // },3000)
  
//}

// console.log(getCitylist())

//function cityPopulation(cb){

  //const arrofPopulation=[
   // {
    //  id:1,
     // population:2000
   // },
   // {
     // id:2,
     // population:4000
   // }
 // ]

 // setTimeout(()=>{

   // cb(arrofPopulation)
    
 // },4000)
  
//}

// I want the population of kanpur

//console.log(population);


//[
  //{
    //name:"shubham",
    //adhar:"898999"
  //},
  // {
   // name:"Ali",
    //adhar:"898876669"
 // },
  // {
   // name:"sweta",
    //adhar:"866679"
 // }
//]

//[{adhar:"866679",vaccinated:true}]




<! ------------------------------------->
  
  function callApi(cb) {
  $.ajax({
    method: 'GET',
    url: 'https://fakestoreapi.com/products/',
    success: function (result) {
      cb(null, result);
      //console.log(result);
    },
    error: function (err) {
      //  console.log(err);
      cb(err, null);
    },
  });
}

function fetch2(url) {
  const promise = new Promise((res, rej) => {
    $.ajax({
      method: 'GET',
      url: url,
      success: function (result) {
        cb(null, result);
        //console.log(result);
      },
      error: function (err) {
        //  console.log(err);
        cb(err, null);
      },
    });
  });

  return promise;
}

fetch('https://fakestoreapi.com/products/')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

fetch2('https://fakestoreapi.com/products/')
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

function callApiPromise() {
  //Creating a promise
  const anuj = new Promise(function (resolved, rejected) {
    // you can put some condition in here -->
    // based on which either you can resolve the promise or you can reject the promise ---->

    $.ajax({
      method: 'GET',
      url: 'https://fakestoreapi.com/products/',
      success: function (result) {
        resolved(result);
        //console.log(result);
      },
      error: function (err) {
        //  console.log(err);
        rejected(err);
      },
    });
  });

  return anuj;
}

const btn = document.getElementById('click');
const ul = document.getElementById('ul');
let data2 = [];

btn.addEventListener('click', function () {
  // error first call back
  // the first paramter is an error object

  callApi(function (err, data) {
    console.log(err, data);
  });

  //executing a promise
  /*
  callApiPromise()
    .then(function (data) {
      console.log('Promise Success', data);
    })
    .catch(function (err) {
      console.log('Promise Error', err);
    });
    */
});

//Write a function that takes a number and returns a promise ,depending on whether the number is even or odd
//resolve or reject the proimise

function foo(num) {
  //promise creation part
  const promise = new Promise(function (res, rej) {
    if (num % 2 == 0) {
      res('Number is even');
    } else {
      rej('number is odd');
    }
  });

  return promise;
}

console.log('hii');

//execution phase
foo(2).then((data) => {
  console.log(data);
});

console.log('hii2');

