
//student obj
let student = {
    sname:"AAA",
    sid:1,
    isStudying:false,
    skills:["java","python","sql","webtech"],
    address:{
        city:"chennai",
        pincode:600028
    },
    work:function(){
        console.log("likes to eat...");
    }
}
console.log(student);

//accesssing obj properties
console.log("Name:",student.sname);
console.log("ID:",student.sid);
console.log("student's skills are:",student.skills);
console.log("student's second skill is:",student.skills[1]);
console.log("student's address is:",student.address);
console.log("student's pincode is:",student.address.pincode);
student.work();         //function call

console.log("-------------------------------------------");


//employee obj
let employee = {
    empName:"BBB",
    empId:2,
    isGood:true,
    salary:9999.99,
    company:"Microsoft",
    contact:{
        phone:9876543210,
        email:"BBB@gmail.com"
    },
    Branch:function(){
        console.log("working under Development");
    }
}
console.log(employee);
console.log("Employee name:",employee.empName);
console.log("Employee Id:",employee.empId);
console.log("company name:",employee.company);
console.log("Good behaviour?:",employee.isGood);
console.log("Employee's email:",employee.contact.email);
employee.Branch()

console.log("---------------------------------------------");

//how to modify obj
employee.empId = 3
console.log(employee);

//how to add new obj
student.phoneNO = 9874563210;
console.log(student);
//how to delete obj
delete student.isStudying
console.log(student);

console.log("---------------------------------------------");
//extra access by using []
console.log("sname"); //AAA
//console.log(sname);//error





