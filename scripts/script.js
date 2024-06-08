let signupBtn=document.getElementById("signupbtn");
let signinBtn=document.getElementById("signinbtn");
let title=document.getElementById("title");
let changingField=document.getElementById("changingField");
let link=document.getElementById("signLink");

signinBtn.onclick =function(){
    if(!signinBtn.classList.contains("disable")){
            location.href="index.html";
    }else{
    changingField.style.maxHeight='0';
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    }
}

signupBtn.onclick =function(){
    if(!signupBtn.classList.contains("disable")){
        location.href="index.html";
    }else{
    changingField.style.maxHeight='65px';
    title.innerHTML="Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}
}

link.onclick=function(){
    changingField.style.maxheight='0';
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}