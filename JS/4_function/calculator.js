
//calculator using hof,cbf
let add = (a,b) =>{
    console.log("Addition:", a+b); 
} 
let sub = (a,b) =>{
    console.log("Substraction:", a-b); 
} 
let mul = (a,b) =>{
    console.log("multiplication:", a*b); 
} 
let div = (a,b) =>{
    console.log("Division:", a/b); 
} 

let calculator = (task,num1,num2) =>{
    task(num1,num2)
}

calculator(add , 10,20)
calculator(sub , 100,20)
calculator(mul , 30,8)
calculator(div , 800,4)