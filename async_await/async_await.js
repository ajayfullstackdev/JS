
const checkEven = async (n) => {

  if (n % 2 === 0) {
    return `${n} is Even Number`;
  } else {
    return "Not a Even Number";
  }
}

let ch = checkEven(4)

console.log(ch)


const display = async () => {

  try {
    let result = await checkEven(5);
    console.log(result)
  } catch (err) {
    console.log(err)
  }

}

display();
