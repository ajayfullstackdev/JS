https://gist.github.com/shubhamdixit863/a676b1d9f8e1f0d10c9fb352fe33c8c2

var a=99;



let obj={
name:"shubham",
func:function(){
  console.log(this)
}
}



function foo(){
  var a=9;



 console.log(this);  // the value of this will be the global object
  
}



obj.func();



// call ,bind and apply



//foo();  //execution context // callsite


