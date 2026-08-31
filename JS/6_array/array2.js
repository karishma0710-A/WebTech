//1.add elements
let arr8 = [1000, 750, 250, 500];
let arr9 = arr8.map((num) => {
  return num + 200;
});
console.log(arr9);             // [1200, 950, 450, 700];

//2.convert to uppercase
let subs = ["java","python","sql","webtech"]
let res1 = subs.map((s)=>{
    return s.toUpperCase();
})
console.log(res1);              //['JAVA', 'PYTHON', 'SQL', 'WEBTECH']

//3.
let marks = [70,20,86,59,67,43]
let res2 = marks.filter((e)=>{
    return e > 60
})
console.log(res2);              // [70, 86, 67];


//4.forEach()
let arr5 = [10,20,30,40,50]
arr5.forEach((ele)=>{
    console.log(arr5);
})

//prog
let arr1 = [1,2,3,4,5,6,7,8,9]
let result1 = arr1.map((r1)=>{
    return r1*2
})
console.log(result1);

console.log("--------------------");

let result2 = arr1.filter((r2)=>{
    return (r2%2==0)
})
console.log(result2);

console.log("-----------");

let result3 = arr1.forEach((ele)=>{
    console.log(ele+10);
})
