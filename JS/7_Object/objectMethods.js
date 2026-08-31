//14/08/26
let marker = {
    name:"camlin",
    price:50,
    color:"blue",
    canwrite:true
}
console.log(marker);

//1.object.keys()
let keys = Object.keys(marker)
console.log(keys);

//2.object.values()
let value = Object.values(marker)
console.log(value);

//3.object.entries()
let entry = Object.entries(marker)
console.log(entry);

//4.object.freeze()
let obj1 = {
    name:"laptop",
    brand:"hp",
    price:60000,
    color:"black"
}
Object.freeze(obj1)     //we cant change 
console.log("before freeze");
console.log(obj1);
obj1.brand = "dell"
obj1.waranty = 2
delete obj1.color

console.log("after freeze");
console.log(obj1);

//5.object.isFrozen()
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(marker));

//6.object.seal()
let obj2 = {
  name: "projector",
  brand: "epson",
  price: 80000,
  color: "white",
};
console.log("before seal");
console.log(obj2);
Object.seal(obj2)

console.log("after seal");
obj2.color = "grey" //can modify existing
delete obj2.brand   //cant delete
obj2.waranty = 2    //cant add new
console.log(obj2);

//7.object.isSealed()   
console.log(Object.isSealed(obj2));     //true
console.log(Object.isSealed(marker));     //false
console.log(Object.isSealed(obj1));     //true  - its frozen so seal will give as true 

//8.object.assign()
let obj3 = {
    name:"raja"
}
let obj4 = {
    gf:"rani"
}
let m1 = Object.assign(obj3,obj4)
console.log(m1);

//-----------------
let obj5 = {
  name: "rajaaa",
};
let obj6 = {
  gf: "raniiii",
};
let m2 = Object.assign({},obj5,obj6)
console.log(m2);
console.log(obj5);

//9.objectName.hasOwnProperty
let student ={
    name:"AAA",
    age:22
}
student.hasOwnProperty("name");     //true
student.hasOwnProperty("height");  //false





