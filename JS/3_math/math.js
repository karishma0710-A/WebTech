
//1.math.max()
console.log(Math.max(3,5,7,9)); //9
console.log(Math.max(3,67,45,87));

//2.Math.min()
console.log(Math.min(73,67,35,56));
console.log(Math.min(67,45,87));

//3.Math.sqrt()
console.log(Math.sqrt(100));
console.log(Math.sqrt(10));

//4.Math.abs()
console.log(Math.abs(-39856));
console.log(Math.abs(-45));

//5.Math.floor() ->give previuos value only (before point)
console.log("math.floor...");
console.log(Math.floor(7.3));
console.log(Math.floor(3.8));

//6.Math.ceil() - will gove next value
console.log("math.ceil..");
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.0001));

//7.Math.round() ->above 0.5 (next value), below 0.5 (previuos value)
console.log("math.round...");

console.log(Math.round(7.4));
console.log(Math.round(7.9));

//8.Math.random() ->range = 0.0 to 0.9999
console.log("math.random..........");
console.log(Math.random());
console.log(Math.random() *10);   // generate number bw 0 to 9 with decimal
console.log(Math.floor(Math.random() * 10));   // generate number bw 0 to 9 without decimal

//otp generation
console.log("-----1000-9999-----------");

console.log(Math.floor(Math.random() *9000 +1000));

console.log("-----number from 10-25-----");
console.log(Math.floor(Math.random() *16 +10));      //we can find the range by ((max-min)+1)+min

//9.Math.pow()
console.log(Math.pow(2,3));





