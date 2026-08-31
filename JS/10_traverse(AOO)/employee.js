const employees = [
  {
    id: 1,
    name: "Arun",
    age: 28,
    department: "IT",
    salary: 60000,
    experience: 4,
    skills: ["JavaScript", "React"],
    isActive: true,
  },
  {
    id: 2,
    name: "Priya",
    age: 32,
    department: "HR",
    salary: 55000,
    experience: 7,
    skills: ["Recruitment", "Communication"],
    isActive: true,
  },
  {
    id: 3,
    name: "Rahul",
    age: 25,
    department: "IT",
    salary: 45000,
    experience: 2,
    skills: ["JavaScript", "Node.js"],
    isActive: false,
  },
  {
    id: 4,
    name: "Sneha",
    age: 30,
    department: "Finance",
    salary: 70000,
    experience: 6,
    skills: ["Excel", "Accounting"],
    isActive: true,
  },
  {
    id: 5,
    name: "Vikram",
    age: 35,
    department: "IT",
    salary: 90000,
    experience: 10,
    skills: ["JavaScript", "Node.js", "MongoDB"],
    isActive: true,
  },
  {
    id: 6,
    name: "Divya",
    age: 27,
    department: "Marketing",
    salary: 50000,
    experience: 3,
    skills: ["SEO", "Content Writing"],
    isActive: true,
  },
  {
    id: 7,
    name: "Karthik",
    age: 29,
    department: "Finance",
    salary: 65000,
    experience: 5,
    skills: ["Excel", "Accounting", "SQL"],
    isActive: false,
  },
  {
    id: 8,
    name: "Anjali",
    age: 24,
    department: "IT",
    salary: 40000,
    experience: 1,
    skills: ["HTML", "CSS", "JavaScript"],
    isActive: true,
  },
  {
    id: 9,
    name: "Suresh",
    age: 38,
    department: "HR",
    salary: 80000,
    experience: 12,
    skills: ["Recruitment", "Management"],
    isActive: true,
  },
  {
    id: 10,
    name: "Meena",
    age: 31,
    department: "Marketing",
    salary: 58000,
    experience: 8,
    skills: ["SEO", "Social Media", "Content Writing"],
    isActive: false,
  },
];


// 1. Get an array containing only the names of all employees.

let empName = employees.map((employee)=>{
  return employee.name
})
console.log(empName);       //['Arun', 'Priya', 'Rahul', 'Sneha', 'Vikram', 'Divya', 'Karthik', 'Anjali', 'Suresh', 'Meena']

console.log("---------------------------------------------------------------------------");


// 2. Get all employees whose salary is greater than ₹60,000.

let empSal =  employees.filter((employee)=>{
  return employee.salary > 60000
})
      // console.log("eligible employee objects : ",empSal);            //will print whole obj

let empSalName =  employees.filter((employee)=>{
  return employee.salary > 60000
  })
  .map((employee)=>{
    return employee.name              
  })
  console.log(empSalName);      //['Sneha', 'Vikram', 'Karthik', 'Suresh']

  console.log("---------------------------------------------------------------------------");


// 3. Get the names of all employees who work in the IT department.

let empDept = employees.filter((employee)=>{
  return employee.department == "IT"
})    // console.log(empDept);    //will print whole obj

.map((employee)=>{
  return employee.name
})
console.log(empDept);           //['Arun', 'Rahul', 'Vikram', 'Anjali']

console.log("---------------------------------------------------------------------------");

// 4. Calculate the total salary of all employees.

let totslSal = employees.reduce((total,emp)=>{
  return total+emp.salary
},0)
console.log(totslSal);        //613000

console.log("---------------------------------------------------------------------------");

// 5. Calculate the average salary of all employees.

let avgSal = employees.reduce((total,emp)=>{
  return (total+emp.salary)/2
},0)
console.log(avgSal);          //61919.921875

console.log("---------------------------------------------------------------------------");

// 6. Get all employees who are currently active.

let activeEmp = employees.filter((employee)=>{
  return employee.isActive == true
})
.map((employee)=>{
  return employee.name
})
console.log(activeEmp);       //['Arun', 'Priya', 'Sneha', 'Vikram', 'Divya', 'Anjali', 'Suresh']

console.log("---------------------------------------------------------------------------");

// 7. Find the employee with id = 7.

empId = employees.filter((employee)=>{
  return employee.id == 7
})
.map((employee)=>{
  return employee.name
})
console.log(empId);     //['Karthik']

console.log("---------------------------------------------------------------------------");


// 8. Find the employee who has the highest salary.

let higestSal = employees.reduce((max,emp)=>{
  return emp.salary > max.salary ? emp:max
},employees[0])

console.log(higestSal.name);      //Vikram

console.log("---------------------------------------------------------------------------");

// 9. Find the employee who has the most years of experience.

let moreExp = employees.reduce((max,emp)=>{
  return emp.experience > max.experience ? emp : max
},employees[0])

console.log(moreExp.name);      //Suresh

console.log("---------------------------------------------------------------------------");

// 10. Get the names of employees who have more than 5 years of experience.

let empExp = employees.filter((employee)=>{
  return employee.experience > 5
})
.map((employee)=>{
  return employee.name
})
console.log(empExp);        //['Priya', 'Sneha', 'Vikram', 'Suresh', 'Meena']

console.log("---------------------------------------------------------------------------");

// 11. Get all employees who know JavaScript.

let empSkill = employees.filter((employee)=>{
  return employee.skills.includes("JavaScript");
})
.map((employee)=>{
 return employee.name
})
console.log(empSkill);            //['Arun', 'Rahul', 'Vikram', 'Anjali']

console.log("---------------------------------------------------------------------------");


// 12. Find out whether there is at least one employee who earns more than ₹1,00,000.

let findSal = employees.filter((employee)=>{
  return employee.salary>100000
})
.map((employee)=>{
  return employee.name
})
console.log(findSal);   //empty array - no such data 

//or

let findSal1 = employees.some((employee)=>{
  return employee.salary > 100000
})
console.log(findSal1);      //false

//some() -> true-false = true
//every() -> true - false = false


