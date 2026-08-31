//1.
let student1 = {
    name:"karishma",
    age: 21,
    course:"B.Tech",
    cgpa:8.39
}
console.log(student1);      //printing whole obj

student1.city = "chennai";  //adding new k-v
console.log(student1);

student1.cgpa = 8.5         // modifying existing data
console.log(student1);

//printing obj values
console.log("Name:",student1.name);
console.log("Course:",student1.course);
console.log("CGPA:",student1.cgpa);         

//printing using []
console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1["course"]);
console.log(student1["cgpa"]);

//dynamic property access
let student = {
  name: "rahul",
  age: 22,
  course: "Java",
  marks: 85,
};

let property = "marks";
console.log(student[property]);

//obj+condition
let employee = {
  name: "Arun",
  age: 24,
  salary: 45000,
  experience: 2,
};
if(employee.salary > 40000){
    console.log("high salary"); 
}else{
    console.log("low salary"); 
}
//modify based on condition
let employee1 = {
  name: "Arun",
  age: 24,
  salary: 45000,
  experience: 2,
};
if(employee1.experience >= 2){
    employee1.salary+=5000
}
console.log(employee1);

//creating new obj property key and  do some operations
let Gadget = {
    name:"laptop",
    price:60000,
    quantity:2
};
Gadget.total_price = Gadget.price * Gadget.quantity;
console.log(Gadget);

//new variable + condition + && + adding a property
let student2 = {
  name: "Priya",
  marks: 78,
  attendance: 85,
};
if(student2.marks>=50 && student2.attendance>=75){
    student2.result = "pass"
}else{
    student2.result = "fail"
}
console.log(student2);

//delete
let user = {
  name: "Karthik",
  age: 25,
  email: "karthik@gmail.com",
  password: "12345",
};
delete user.password
console.log(user);

//nested obj
let employee3 = {
  name: "Arun",
  age: 24,
  address: {
    city: "Chennai",
    pincode: 600001,
  },
};
console.log(employee3.name);
console.log(employee3.address.city);
console.log(employee3.address.pincode);

//modify nested obj
employee3.address.city = "bangalore"
console.log(employee3);

//for in loop
let marks = {
  math: 85,
  science: 90,
  english: 78,
  computer: 95,
};
for(let res in marks){
    console.log(res,":",marks[res]); 
}

//highest mark
let highest = Number.MIN_VALUE , subject;
for(let res1 in marks){
    if(marks[res1] > highest){
        highest = marks[res1]
        subject = res1
    }
}
console.log(highest,":",subject);

//note : Number.MIN_VALUE is smallest positive value only so instead of that we can use -Infinity



