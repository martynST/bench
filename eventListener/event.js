//document.getElementById("").addEventListener("event",function,useCapture???????)

let myFriends = document.getElementById("myFriends");
let clickButton = document.getElementById("myBtn");
let mouseButton = document.getElementById("myBtn2");
let nav = document.getElementById("nav");
let home = document.getElementById("home");
let homeMenu = document.getElementById("homeMenu");
let about = document.getElementById("about");
let aboutMenu = document.getElementById("aboutMenu");
let something = document.getElementById("something");
let somethingMenu = document.getElementById("somethingMenu");
let keyString = [];
let konami = ["&", "&", "(", "(", "%", "'", "%", "'", "B", "A"];
//click
clickButton.addEventListener("click", () => window.alert("Hello My Dudes!"));
//mouse enter leave
mouseButton.addEventListener("mouseenter", () => mouseButton.value = "Hello My Dudes!");
mouseButton.addEventListener("mouseleave", () => mouseButton.value = "Mouse Over Me");
//mouse enter + change css
myFriends.addEventListener("mouseenter",() => {
    switch (window.getComputedStyle(myFriends).getPropertyValue('text-align')){
        case "left":
            myFriends.style.textAlign = "center";
            break;
        case "center":
            myFriends.style.textAlign = "right";
            break;
        case "right":
            myFriends.style.textAlign = "left";
            break;
        default:
            window.alert("Something went wrong");
            break;
    }    
})

//show drop down menu
home.addEventListener('mouseenter',() => homeMenu.style.display = "block");
home.addEventListener('mouseleave',() => homeMenu.style.display = "none");
about.addEventListener('mouseenter',() => aboutMenu.style.display = "block");
about.addEventListener('mouseleave',() => aboutMenu.style.display = "none");
something.addEventListener('mouseenter',() => somethingMenu.style.display = "block");
something.addEventListener('mouseleave',() => somethingMenu.style.display = "none");

//konami code
window.addEventListener("keydown", (e) => {keyString.push(String.fromCharCode(e.keyCode)); checkCode();});
function checkCode() {
    let matched = true;
    if (keyString.length == 11)
    {
        keyString = keyString.slice(1);
    }
    for (let i = 0; i < konami.length; i++)
    {
        if (keyString[i] != konami[i])
        {
            matched = false;            
        }
    }
    console.log(keyString)
    if (matched)
    {
        console.log("DO A THING")
    }
}