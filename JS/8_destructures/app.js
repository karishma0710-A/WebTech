let student  = {
    sname:"dhoni",
    age:7,
    isPlayer:true,
    skills:["math","rhymes","gk","drawing"]
}

console.log(student.sname);
console.log(student["age"]);            //normal

//another 
let {sname,isPlayer,skills,age} = student
console.log(sname);
console.log(age);
console.log(skills);
console.log(isPlayer);

console.log("----------------------");
console.log(student);

console.log("----------------------");


//rest parameter 
//1
function f1(a,b,c){
    console.log(a);         //10
    console.log(b);         //20
    console.log(c);         //30
}
f1(10,20,30,40,50,60)

//2
function f2(a, b,... c) {
  console.log(a); //10
  console.log(b); //20
  console.log(c); //[30,40,50]
}
f1(10, 20, 30, 40, 50, 60);

//3
function f3(...a) {
  console.log(a); //[10, 20, 30, 40, 50, 60]
}
f1(10, 20, 30, 40, 50, 60);


//spread operator
let frontend = ["html","css","js","react"]
let backend = ["node","express","mongodb"]
console.log(frontend);
console.log(...frontend);

//1.merge arrays using spread operator
let fullstack = [frontend,backend]
console.log(fullstack);         //normal op
let fullstack1 = [...frontend,...backend]
console.log(fullstack1);         //combined op

//2.merge obj using spread operator
let ob1 = {
    name:"AAA"
}
let ob2 = {
    class:"webtech"
}
let ob3 = {...ob1 , ...ob2}
console.log(ob3);
console.log("--------------------------------");

//shallow copy and deep copy 
let subjects = ["java","python","sql"]
//let copy = subjects //shallow copy 
let copy = [...subjects] //deep copy 

copy.push("webtech")

console.log(copy);
console.log(subjects);




