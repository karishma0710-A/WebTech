class student{
    sname;
    sid;
    sage;

    constructor(sname,sid,sage){
        this.sname= sname;
        this.sid = sid;
        this.sage = sage;
    }
}
let stu1 = new student("AAA",1,20)
let stu2 = new student("BBB",2,24)
let stu3 = new student("CCC",3,27)

console.log(stu1);
console.log(stu2);
console.log(stu3);

