//1.Select the <h1> using getElementById()
let heading1 = document.getElementById("name")
console.log(heading1); //will give text+tag
console.log(heading1.innerText); //will give text only


//2. Select both <p> elements using getElementsByClassName()
let paragraphs = document.getElementsByClassName("info")
console.log(paragraphs[0]);
console.log(paragraphs[1]);


//3.Select the <button> using querySelector()
let buttons = document.querySelector("button")
console.log(buttons);

//4.Change the <h1> text to "Java Full Stack Developer"
let heading2 = document.getElementById("name")
heading2.innerText = "Java Full Stack Developer"
console.log(heading2.innerText);


//5.Change the <h1> color to "blue"
let heading3 = document.getElementById("name")
heading3.style.color = "blue"  //will not print in console but changed in browser

//6. Get the text of the second <p> using the collection.
let element1 = document.getElementsByTagName('p')
console.log(element1[1]);

//7.Create a new <p> element and give it the text "Learning DOM"
let p = document.createElement('p')
p.innerText = "Learning DOM"

//8.Add that new <p> inside #profile.
let profile = document.getElementById("profile");
profile.append(p);

//9. Remove the <button>
let profile1 = document.getElementById("profile")
let removeButton = document.getElementsByTagName("button")
profile1.removeChild(removeButton[0])

                //or//
// let removeButton = document.querySelector("button");
// removeButton.remove();







