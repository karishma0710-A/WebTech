//1.named function
function empDetails() {
  console.log("miller");
  console.log(101);
}
empDetails();

//2.function with parameter
function add(a, b) {
  console.log(a + b);
}
add(10, 30);

//3.function with return statement
function sub(a, b) {
  return a - b;
}
let res = sub(50, 30);
console.log(res);


//pending -some
//4.arrow function

//03/08/26

//5.nested function
console.log("..............nested function............");

let outer = () => {
  console.log("I'm outer function");

  let inner = () => {
    console.log("I'm outer function");
  };
  inner();
};
outer();

//lexicol scopping
let outer1 = () => {
  let a = 10;

  let inner1 = () => {
    let b = 20;
    console.log("a value is :", a);
  }

  // console.log("b value is :",b); //error
  
  inner1();
};
outer1();

//6.higher order function
console.log("------------higher order function---------");

let wish =()=>{
  console.log("happy birthday");    //cb function  
}
let msg = (myFunc)=>{               //HO function
  myFunc();
}
msg(wish)

msg( ()=>{
  console.log("I'm callback function");       //another way
  
} )

//04/08/26
//7.IIFE

(
  function(){
  console.log("his this is IIFE function");
}
)();