//1.printing
let employee = {
  name: "Arun",
  salary: 40000,
  role: "Developer",
  city: "Chennai",
};

let { name, role, city } = employee;

console.log(name);                  //arun
console.log(role);                  //developer
console.log(city);                  //chennai
console.log("------------------------------------------------");

//2.rename
let emp1 = {
    name:"arun",
    salary:40000,
    role:"developer"
};
let {name:ename , salary:pay } = emp1
console.log(ename);                         //arun  40000
console.log(pay);
console.log("------------------------------------------------");

//3.newly adding 
let emp2 = {
    name:"kavi",
    age:22
};
let {name:name1 , city1="chennai"} = emp2
console.log(name1);             //kavi
console.log(city1);             //22
console.log("------------------------------------------------");

//4.nested destructing
let student1 = {
    name2:"karishma",
    marks:{
        maths:85,
        science:90
    }
};
let { name2 , marks:{maths,science}} = student1
console.log(name2);
console.log(maths);
console.log(science);
console.log("------------------------------------------------");

//5.defalut + rename + nested obj
let user = {
    ename1 : "kavitha",
    address1 : {
        city:"chennai"
    }
}
let {
  ename1: uname, address1: { city: location1, pincode = 6000028 }} = user;
console.log(uname);                 //kavitha
console.log(location1);             //chennai
console.log(pincode);               //6000028

console.log("------------------------------------------------");


//6.array + obj
let data = [ {
                dname : "AAA",
                dmarks : 90
            } , {
                dname : "BBB",
                dmarks : 45
            } ]

let [{ dname:m1 , dmarks:n1 },{ dname:m2 , dmarks:n2 }] = data
console.log(m1);    //AAA
console.log(n1);    //90
console.log(m2);    //BBB
console.log(n2);    //45


//combining all
let employees = [
  {
    name: "AAA",
    role: "Developer",
  },
  {
    name: "BBB",
    role: "Tester",
  },
  {
    name: "CCC",
    role: "Designer",
  },
];

let [
    {
       name:fname,
       role:frole 
    },
    ...others

] = employees

console.log(fname);
console.log(frole);
console.log("other obj using rest parameter:",others);





