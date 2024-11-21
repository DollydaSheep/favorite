const translate = document.querySelectorAll('.translate');
const title = document.querySelector('.title');
const hero = document.querySelector('.hero');
const mainfade = document.querySelectorAll('.mainfade'); 
const body = document.querySelector('.body');

let user = document.getElementById("user");
let pass = document.getElementById("pass");
let container = document.querySelector('.container');
let logContainer = document.querySelector('.log-in');
let logIn = 0;

isLogIn();

window.addEventListener('scroll', () => {
    if(logIn!=1){
        container.style.filter = "blur(20px)";
        logContainer.style.transform = "translateY(75%)";
        body.style.overflowY = "hidden";
    }
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px`;
    })
    title.style.opacity  = -scroll / (hero_height / 2) + 1;

})

function login(){
    container.style.filter = "blur(20px)";
    logContainer.style.transform = "translateY(75%)";
    body.style.overflowY = "hidden";
}

function submit(){
    console.log(user.value);
    console.log(pass.value.length);
    if(user.value && pass.value){
        container.style.filter = "blur(0px)";
        logContainer.style.transform = "translateY(-100%)";
        localStorage.setItem("login",1);
        isLogIn();
        body.style.overflowY = "scroll";
    }else if(!user.value){
        alert("Username is blank");
    }else if(pass.value.length < 8){
        alert("Password must be 8 characters long");
    }else if(user.value != u && pass.value != p){
        alert("Wrong Username and Password");
    }
    else if(user.value != u){
        alert("Wrong Username")
    }else if(pass.value != p){
        alert("Wrong Password");
    }
    
}

function isLogIn(){
    if(localStorage.getItem("login")!=1){
        logIn = 0;
    }else{
        logIn = 1;
    }
}