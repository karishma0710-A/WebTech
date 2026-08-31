//1.
let players = [
    {
        name : "virat",
        jersyNo : 18,
        age: 36
    },
    {
        name : "rohit",
        jersyNo : 45,
        age:90
    },
    {
        name : "MSD",
        jersyNo : 7,
        age:14
    },
    {
        name : "DK",
        jersyNo : 19,
        age:38

    } 
]
players.map((ele)=>{
    console.log(ele);
    console.log(ele.name);
})
// console.log(players[0].name);
// console.log(players[1].name);
// console.log(players[2].name);
// console.log(players[3].name);


//find avg age
let total = players.reduce((sum,player)=>{
    return sum+player.age
},0)
console.log(total);

let avgAge = total / players.length
console.log(avgAge);

//print jersyNO
players.map((player)=>{
    console.log(player.jersyNo);
})


