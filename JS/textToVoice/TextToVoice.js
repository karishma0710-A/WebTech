let myInput = document.querySelector("input")
let myBtn = document.querySelector("button")
let mySelect = document.querySelector("Select")
let allVoices = null


speechSynthesis.addEventListener("voiceschanged" , ()=>{
    allVoices = speechSynthesis.getVoices()
    console.log(allVoices);

    allVoices.forEach((e)=>{
        let myOption = document.createElement("option")
        mySelect.append(myOption)

        myOption.innerHTML = e.name
        myOption.value = e.name
    })
    
})



myBtn.addEventListener("click" , ()=>{
    // console.log(myInput.value);
    let myAudio = new SpeechSynthesisUtterance(myInput.value) //convert text to audio obj
    console.log(myAudio);

    // let allVoices = speechSynthesis.getVoices()
    // console.log(allVoices);  //instead of this we can declare it globally

    let particularVoice = allVoices.find((e)=>{
        if(e.name == mySelect.value){
            return e
        }
    })

     myAudio.voice  = particularVoice
    
    speechSynthesis.speak(myAudio)
    
    
})
