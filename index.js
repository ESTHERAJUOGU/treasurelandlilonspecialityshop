
function bookNow(){
    let button = prompt("do you want to book now?");
    if( button === "yes"){
    alert("welcome");}
    else {
        alert("you will have to wait");
    }
}
let button=document.querySelector("#button");
button.addEventListener("click",bookNow);

function NavigationPreloadManager(){
    let nav =[ "Home", "Services" ,"About US", "contact us"];
 }
 let nav = document.querySelectorAll(".change");
 nav.addEventListener("click", NavigationPreloadManager);