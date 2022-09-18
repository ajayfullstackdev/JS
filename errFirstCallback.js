const checkEven = (n, cb) => {

   let err = "Not a Even Number"
  
    if(n % 2 === 0){
      cb(null, `${n}, is a Even Number`)
    }else{
      cb(err, null)
    }
}

checkEven(11, (err, res) => {
  if(res){
    console.log(res)
  }else{
    console.log(err)
  }
   
})
