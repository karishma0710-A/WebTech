let employee = {
    eId : 101,
    eName : "santanu",
    eSal : 50000,
    eAge : 28
}

//1.
console.log(Object.keys(employee));

//2.
console.log(Object.values(employee));

//3.
console.log(Object.entries(employee));

//4.
console.log("before freeze");
// Object.freeze(employee)  //imp line ....commented bcz once obj is frozen we cant modify that ..
                                            //  for doing other methods we have to comment this (use when using)          
console.log(employee);
// console.log("freezed");

console.log("after freeze");
employee.eId = 102
console.log(employee);

//5.
console.log(Object.isFrozen(employee));

//6.
console.log("before seal");
Object.seal(employee);
console.log(employee);
// console.log("sealed");

console.log("after seal");
employee.eName = "san"
employee.city = "west bengal"
delete employee.eAge
console.log(employee);

//7.
console.log(Object.isSealed(employee));

//8.
let obj1 = {
  product: "mobile", //Object keys are unique. Values can be duplicated, but keys cannot coexist with the same name.
  brand: "poco",
}
let obj2 = {
    prod:"tv",                                          
    brd:"LG"
}
// console.log(Object.assign(obj1,obj2));
// console.log(obj1);  //same ans bcz , other obj will store inside obj1,to avoid that we should use {}
let res = Object.assign({},obj1,obj2)
// let res = Object.assign({},obj1.product,obj2.brd)   //-doubt

console.log(res);

console.log(obj1);

//9.
console.log(employee.hasOwnProperty("eName"));
console.log(employee.hasOwnProperty("country"));

console.log("..................................................................");
//realworld egs

//1.
let product = {
  name: "Laptop",
  price: 50000,
  brand: "HP",
  stock: 10,
};
console.log(Object.keys(product).length);

//2.
let marks = {
  math: 80,
  science: 90,
  english: 70,
  computer: 95,
};
let res1 = Object.values(marks).reduce((sum,m)=>{
    return sum+m;
},0)
console.log(res1);

//3.
let student3 = {
  name: "Karishma",
  age: 21,
  course: "IT",
};
for(let [key,value] of Object.entries(student3)){
    console.log(key, ":", value);
}


//4.
let person = {
  name: "Rahul",
};

let details = {
  age: 25,
};
let res2 = Object.assign({},person,details)
console.log(res2);

//5,6
let product1 = {
  name: "Laptop",
  price: 50000,
};
Object.freeze(product1)
product1.price=60000
console.log(product1);

console.log(Object.isFrozen(product1));

//7,8
let student4 = {
  name: "Karishma",
  marks: 80,
};
Object.seal(student4)
student4.marks = 90
student4.grade = "A"
delete student4.name
console.log(student4);

console.log(Object.isSealed(student4));


//9.
let product5 = {
  name: "Laptop",
  price: 50000,
  brand: "HP",
};
console.log(product5.hasOwnProperty("price"));      //true
console.log(product5.hasOwnProperty("stock"));     //false

                //or

if (product5.hasOwnProperty("price")) {
  console.log("price is :", product5.price);
}else{
    console.log("price not found");
}

if (product5.hasOwnProperty("stock")) {
  console.log("stock is :", product5.stock);
}else{
    console.log("stock not found");
}
