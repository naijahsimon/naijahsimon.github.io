let myVariable;
myVariable = 2046;

console.log(myVariable);

let orangeParagraph = document.getElementById("orange-paragraph")


//orangeParagraph.addEventListener('click', () => {orangeParagraph.style.color = "orange";})

//if else changing text color upon click
orangeParagraph.addEventListener('click', () => {
    if(orangeParagraph.style.color == "orange"){
        orangeParagraph.style.color = "black";
    }else{
        orangeParagraph.style.color = "orange";
    }
})

//entering and exiting text, using a function

let makeGhostTextAppear = () => {
    document.getElementById("ghost-text").innerText = "I am a ghost";
}

let greetingElement = document.getElementById ('greeting-text')
greetingElement.addEventListener('mouseenter', makeGhostTextAppear)

let makeGhostDisappear = () =>{
    document.getElementById("ghost-text").innerText = "";
}

greetingElement.addEventListener('mouseleave', makeGhostDisappear)

//if else
if(myVariable>3){console.log("math works!")
}else{console.log("math is broken")
}