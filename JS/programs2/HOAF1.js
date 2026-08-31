//prog
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result1 = arr1.map((r1) => {
  return r1 * 2;
});
console.log(result1);

console.log("--------------------");

let result2 = arr1.filter((r2) => {
  return r2 % 2 == 0;
});
console.log(result2);

console.log("-----------");

let result3 = arr1.forEach((ele) => {
  console.log(ele + 10);
});

//---------------------------------------------------------------------
console.log("---------------------------------")

//filter
//1.greater than 10 
let nums1 = [5, 12, 7, 20, 3, 18];
let result11 = nums1.filter((n1)=>{
    return n1 > 10;
})
console.log(result11);

//2.even and greater
let nums2 = [3, 8, 12, 5, 20, 7, 15];
let result12 = nums2.filter((n2)=>{
    return (n2>10 && n2%2==0)
})
console.log(result12);

//obj 
let students = [
  { name: "Ram", marks: 85 },
  { name: "Sam", marks: 42 },
  { name: "Raj", marks: 76 },
  { name: "Kavi", marks: 35 },
];
let result13 = students.filter((sm)=>{
    return sm.marks>50
})
console.log(result13);

//forEach
//1.
let students2 = ["Ram", "Sam", "Raj"];
students2.forEach((s2)=>{
    console.log("hello ," ,s2);  
})

//combined
let nums3 = [5, 12, 8, 20, 3, 15];
let result15 = nums3.filter((n3)=>{
    return n3>10;
})
result15.forEach((n4) => {
    console.log(n4);                //12 20 15
 });


 //reduce
 //1.
let numbers = [5, 10, 15, 20];
let result14 = numbers.reduce((total,num)=>{
    return total+num;
},0);
console.log(result14);

//2.
let nums6 = [2, 3, 4, 5];
let result16 = nums6.reduce((total,num)=>{
    return total*num;
},1)
console.log(result16);

//3.
let nums7 = [5, 10, 15, 20, 25];
let result17 = nums7.reduce((max,num)=>{
    return num>max ? num:max;
},nums7[0])
console.log(result17);

//4.
let nums8 = [10, 20, 30, 40, 50];
let result18 = nums8.reduce((total,num)=>{
    return total+num;
},0)
console.log(result18);

//5.
let nums9 = [12, 5, 8, 21, 30, 7];

let result19 = nums9.reduce((total, num) => {
  if (num % 2 == 0) {
    return total+num;
  }

  return total;
}, 0);

console.log(result19);

//6.
let nums10 = [3, 5, 2];
let result20 = nums10.reduce((total,num)=>{
    return total+num;
})
console.log(result20);

//7.
let nums11 = [10, 20, 30, 40, 50];
let result21 = nums11.reduce((total,num)=>{
    return total+num;                       //150            
},0)
console.log("avg is ",result21/nums11.length);








console.log("-----------------------------------------");

//sort
//1.
let marks = [78, 45, 92, 66, 38, 85];
marks.sort((a,b)=>{
    return a-b
})
console.log(marks);

//2.
marks.sort((a,b)=>{
    return b-a
})
console.log(marks);

//3.
let names = ["Kavi", "Arun", "Zara", "Bala", "Deepa"];
names.sort();
console.log(names);

//4.
names.sort().reverse();
console.log(names);


