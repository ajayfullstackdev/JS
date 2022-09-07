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
