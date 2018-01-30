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
let duplicateButton = document.getElementById("duplicateBtn");

bean.on(myFriends, 'click', () => {console.log("Hello My Friends")});
//one and name spaces
bean.on(clickButton, 'click.myNameSpace', () => {console.log("This functionality can be simplified using"); bean.off(clickButton, 'click.myNameSpace')})
bean.one(clickButton, 'click', () => {console.log("bean.one")});

//handlers
function myDudesLog() {
    console.log("Hello My Dudes");
}
function myFriendsLog() {
    console.log("Hello My Friends");
}

bean.on(mouseButton, 'mouseenter', myDudesLog);
bean.on(mouseButton, 'mouseenter', myFriendsLog);
//remove just myDudes function
bean.on(mouseButton, 'mouseleave', () => {console.log("remove my dudes"); bean.off(mouseButton, 'mouseenter', myDudesLog); bean.off(mouseButton, 'mouseleave');})

//duplication - for some reason, when new element is added to div, events on other elements in div get removed
let count = 1;
function duplicateBtn() {
    console.log("test");
    document.getElementById("forBtnDup").innerHTML += "<br><input id='duplicateBtn"+(++count)+"' type = 'button' value = 'duplicate me'>";
    bean.clone(document.getElementById("duplicateBtn"+count), duplicateButton, 'click');
}
bean.on(duplicateButton, 'click', duplicateBtn)

