//named function
function greet(){
    console.log("hello, karishma!");
}
greet()

//function with parameter
function greetuser(name){
       console.log("hello,",name,"!");
}
greetuser("kari")
greetuser("karishma")

//function with return statement
function add(a,b){
    return a+b;
}
let res = add(10,20)
console.log(res);

//1.arrow function
let multiply = (a,b) => {
    return a*b
}
console.log(multiply(4,5));

//2.AF
let multiply1 = (a,b) => a*b
console.log(multiply1(5,2));

//3.AF
let isEven = num => num%2==0 ? "even":"odd"
console.log(isEven(6));                     //op->even
let isEven1 = num => num%2==0
console.log(isEven1(6));                    //op->true


//nested function
let outer = ()=>{
    let inner = () =>{
        console.log("hello from inner"); 
    }
    inner()
}
outer();


//IIFE
(function myFunc(){
    console.log("this is IIFE");
}) ();

//2
(()=>{
    console.log("hey...");
}) ();

//HOF
function sayHello(){
    console.log("hello");
}
function execute(parameter1){
    parameter1();
    console.log("executed..."); 
}
execute(sayHello);

//2.
function add(a,b){
    return a+b;
}
function execute1(a,b,operation){
   let res2 =  operation(a,b);
    console.log(res2);
}
execute1(100,200,add);

//3.
let calculatePrice = (price,operation) =>{
   let result = operation(price);
   return result;
}
let discount = (price)=>{
    return price - 100;
}
console.log(calculatePrice(500, discount));


//4.
let funct1 = (num1 , operation) =>{
    return operation(num1);
}
let func2 = (num1)=>{
    return num1*2;
}
let func3 = (num1)=>{
    return num1*3;
}
console.log(funct1(10,func2));          //20
console.log(funct1(10,func3));          //30


//map
let arr = [10,20,30,40]
let res4 = arr.map((numb)=>{
    return numb *2;
});
console.log(res4);

//2.
let names = ["ram", "sam", "raj"];
let res5 = names.map((n)=>{
    return n.toUpperCase();
})
console.log(res5);

//3.
let nums = [1, 2, 3, 4, 5];
let res6 = nums.map((m)=>{
    return m*m;
})
console.log(res6);

//4. similiar but implicit func in one line
let nums2 = [1, 2, 3, 4, 5];
let res7 = nums2.map(m => m * m);
console.log(res7);
