//closure---->
var k=9;
let h=88;
function bar(){
    debugger;
  bar2();
  
 debugger;
  return "alpha";
   
  
}


function bar2(){
  var c=9;
  let k=9;
  const h=88;
    debugger;
  return "omega";
}
function foo(){
  debugger;
  bar();
  debugger;

  return"beta";
  
}
///

function foo(){
var c=9;
  let k=88;
  const j=77;

  debugger;

  return function name  (){
    

    

    debugger;

    return [c,k,j];  // it should print ?
     
  }


  
}

console.log(foo()()) // what it will return 

//const fn=foo();
//const k=fn();
//console.log(foo()());

