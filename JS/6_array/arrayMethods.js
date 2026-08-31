
//intro
let arr = [10,20,30,40,50,60]
console.log(arr);
console.log(arr.length);

let arr2 = [10,"hi",true,[40,"hello"]]
console.log(arr2);
console.log(arr2.length);

//access
console.log(arr[2]);

//modify value in index
arr[3] = 4000
console.log(arr);

//how to traverse array
let sub = ["sql","python","java","webtech"]
for(let i = 0; i<sub.length; i++){
    console.log(sub[i]);
}

//traversing using foreach loop
for(let subject of sub){
    console.log(subject); 
}

//adding elements in array -push()
let marks = [35,69,70,58,45]
console.log(marks);
console.log(marks.push(100));
console.log(marks);

//2.pop()
let food = ["briyani","dosa","upma"]
console.log(food);
console.log(food.pop(2));
console.log(food);

//3.shift
let food2 = ["briyani", "dosa", "upma"];
console.log(food2);
console.log(food2.shift());
console.log(food2);

//4.unshift
let food3 = ["briyani", "dosa", "upma"];
console.log(food3);
console.log(food3.unshift("curdrice"));
console.log(food3);

//5.indexof()
let num = [10,20,30,40,20,50]
console.log(num.indexOf(20));

//6.lastindexof()
console.log(num.lastIndexOf(20)); 
console.log(num.lastIndexOf(35));

//7.includes
console.log(num.includes(30));

//8.concat()
let frontend = ["html","css","react"]
let backend = ["java","spring","mongodb"]
let fullstack = frontend.concat(backend)
console.log(fullstack);

//9.join()
let charArr = ['h','e','l','l','o']
let str8 = charArr.join("")
console.log(str8);

let charArr2 = ['h','e','l','l','o']
let str7 = charArr2.join("-")
console.log(str7);

//10.reverse
let arr6 = [1,2,3,4,5]
arr6.reverse()
console.log(arr6);

//11.splice() ->delete the elements from array
let arr1 = [10, 20, 30, 40, 50, 60];
arr1.splice(1, 2); //delete
console.log(arr1);

let arr8 = [100, 200, 300, 400, 500, 600];
arr8.splice(2, 2, 700); //modify or replace
//SI , DC , RV
console.log(arr8);

let arr3 = ["java", "python", "node", "express"];
arr3.splice(2, 0, "jS"); //add
//SI , DC , RV
console.log(arr3);

//HOAF
//12.map()
let arr4 = [10,20,30,40,50]
arr4.map((ele , index ,array)=>{
    console.log(ele,index ,array);
})

//12.2
//reduce()

//13
//sort()




















