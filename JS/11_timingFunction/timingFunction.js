//1
console.log("hello ...");

let wish = ()=>{
    console.log("Happy Anniversary ♥️🫶");
}
// wish()

// setTimeout(wish,3000)           //to start and delay

let timer1 = setTimeout(wish, 3000);

console.log("my dear ");

//or 

let timer2 = setTimeout(()=>{
    console.log("hello everyone"); 
},6000)

console.log("bye");

//to stop the timer2
clearTimeout(timer2)
clearTimeout(timer1)


//2.
let sorry = ()=>{
    console.log("I'm extremely sorry");
}
let timer3 = setInterval(sorry,1000)            //to execute every 1s

clearInterval(timer3)
console.log("---------------------------------------");

//3.egs - setTimout
setTimeout(()=>{
    console.log("hey");
})

console.log("how are you");

setTimeout(()=>{
    console.log("hi");
},2000)

console.log("bye");
