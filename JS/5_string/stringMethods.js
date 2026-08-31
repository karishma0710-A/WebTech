
console.log("-----String in js---------");
let a = 'hi'
let b = "hello"
let c = `how 
are 
you`
console.log(a);
console.log(b);
console.log(c);

//-------------------------------------------------------------------------------------------------

console.log("..........String interpolation/template literals...........");
let a1 = 10;
let b2 = 20;
let myname = "karishma";
console.log(`the addition of ${a} and ${b} is ${a+b}`);

console.log(`myname : ${myname}`);

//--------------------------------------------------------------------------------------------------

console.log("---string methods---");
//length
let msg = "how are you"
console.log(msg.length);

//1.toUppercase
let s1 = "hello"
console.log(s1.toUpperCase());

//2.toLowercase
let s2 = "HOW ARE YOU"
console.log(s2.toLowerCase());

//3.trim
let s3 = "   string1234  "
console.log(s3.trim());

//4.indexOf
let s4 = "hello"
console.log(s4.indexOf('l'));

//5.lastindexOf
let s5 = "how are you"
console.log(s5.lastIndexOf('o'));

//6.charAt
let s6 = "karishma"
console.log(s6.charAt(3));

//7.concat
let s7 = "AAA"
let s8 = "BBB"

console.log(s7.concat(" "+ s8 + "!!"));

//8.includes
let s9 = "java script"
console.log(s9.includes("java"));  //true
console.log(s9.includes("python")); //false


//9.replace
let sentence  = `I am from bangalore,
i love bangalore`
console.log(sentence.replace("bangalore","chennai"));

//10.replaceAll
console.log(sentence.replaceAll("bangalore","chennai"));

//11.split()
let msg1 = "how are you"
console.log(msg.split(" "));    //["how","are","you"]
console.log(msg.split(""));     //['h','o','w',' '....]
console.log(msg.split());       //["how are you"]

//12.slice()
let msg2 = "how are you"
console.log(msg2.slice(0,2)); //ho
console.log(msg2.slice(4));  //ru
console.log(msg2.slice(3,0)); //no op - bcz SI should be greater than EI
console.log(msg2.slice(-3)); //you
console.log(msg2.slice(0,-1)); //how are yo

//13.substring()
console.log(msg2.substring(0,2)); //ho
console.log(msg2.substring(4));  //ru
console.log(msg2.substring(3,0)); // how - bcz it will swap and give  by default
console.log(msg2.substring(-3)); //we cant give negative value
console.log(msg2.substring(0,-1)); //how are yo














