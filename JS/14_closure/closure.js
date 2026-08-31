let outer = () => {
  let a = 20;

  let inner = () => {
    a = a + 1;
    console.log(a);
  };
  return inner;
};

let ans = outer();

ans();   //21
ans();
ans();
ans();
ans();

console.log("---------------------------------");


// ! Function Currying

function multiply(a, b, c) {
  return a * b * c;
}

let ans2 = multiply(1, 2, 3);
console.log(ans2);
//-------------------------------------------------------
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let sum = add(1)(2)(3);

// ! function currying with arrow function

let add2 = (a) => (b) => (c) => a + b + c;

console.log(add2(10)(20)(30));




//practice
//1.
let counter = () =>{
  let count = 0;

  let counter2 = () =>{
    count++;
    console.log(count);
    
  }
  return counter2
};

let ans3 = counter();
ans3()
ans3()
ans3()
ans3()

//2.
let bankAccount = () =>{
  let balance = 1000

  let deposit = (amount)=>{
    balance = balance + amount
  }

  let getBalance = ()=>{
    console.log(balance); 
  }
  return {
    deposit,
    getBalance
  };

}
let account = bankAccount();
account.getBalance();
account.deposit(500);
account.getBalance();
account.deposit(500);
account.getBalance();