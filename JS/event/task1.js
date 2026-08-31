let myDiv = document.querySelector("div")
let myBtn = document.querySelector("button")

myDiv.addEventListener("click" , (e)=>{
    myDiv.style.backgroundColor = "blue"
    e.stopPropagation()
})
myBtn.addEventListener("click" , (e)=>{
    myBtn.style.backgroundColor = "yellow"
    e.stopPropagation()
})