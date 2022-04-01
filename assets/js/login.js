let email = document.getElementById("email");
let pwd = document.getElementById("exampleInputPassword1");

function valid(){
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(pwd.value.trim()==""){
        alert("please provide password");
        return false;
    }
    else if(pwd.value.length<=8){
        alert("password should contain 8 character");
        return false;
    }
}

function validate(){
    let form = document.getElementById("form");
    let email = document.getElementById('email').value;
    let text =document.getElementById("text");
    let regexp = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;

    if(email.match(regexp))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Your Email Adddress is valid";
        text.style.color="#00ff00";
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML="Enter valid email address";
        text.style.color="#ff0000";
    }
    }
  
   