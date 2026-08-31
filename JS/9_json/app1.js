
//object
let emp = {
   ename:"karishma",
   age:20,
   isEmp : true
}

console.log(emp);
console.log(typeof emp);

//1.JSON.stringify
let res = JSON.stringify(emp)
console.log(res);

//2.JSON.parse
let res1 = JSON.parse(res)
console.log(res1);

//array
let arr = [10,20,30,40,50]
console.log(arr);
let res2 = JSON.stringify(arr)
console.log(res2);
let res3 = JSON.parse(res2)
console.log(res3);

//DEEP COPY by using json
let arr3 = [10,20,30,40]
let copy = JSON.parse(JSON.stringify(arr3))         //arr -> string ->arr in copy 
copy.push("html");
arr3.shift()
console.log(copy);              //[10, 20, 30, 40, 'html']
console.log(arr3);              //[20, 30, 40]







