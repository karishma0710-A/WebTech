let myMain  = document.querySelector("main")
let mySection  = document.querySelector("section")
let myDiv  = document.querySelector("div")
let myBtn  = document.querySelector("button")

// myMain.addEventListener("click" , ()=>{
//     console.log("main is clicked");
// },true)
//3rd arg can be true or false , if false means target will trigger first 
//if we make any thing true as capturing value , that will be triggered first ,by default CV = false

myMain.addEventListener("click" , (e)=>{
    e.stopPropagation()
    console.log("main is clicked");
})

mySection.addEventListener("click" , (e)=>{    
    e.stopPropagation()                  
    console.log("Section is clicked");
})
myDiv.addEventListener("click" , (e)=>{
    e.stopPropagation()
    console.log("Div is clicked");
})
myBtn.addEventListener("click" , (e)=>{

    // console.log(e);         //it contains all details of event 
    // e.stopPropagation()     //it will stop propogation but duplicates events also triggered

    e.stopImmediatePropagation()  //it will stop the propogation but duplicate events will not be triggered 
    console.log("Button is clicked");
})

myBtn.addEventListener("click" , ()=>{
    console.log("I'm also button");             //duplicate event of btn
    
})