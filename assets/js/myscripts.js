let email = document.getElementById("email");
let umber = document.getElementById("number");
let pwd = document.getElementById("exampleInputPassword1");
let cpwd = document.getElementById("exampleInputPassword2");
// let str = document.getElementById("passHelp");

function valid(){
    if(email.value.trim()==""){
        alert("Email cannot be empty");
        return false;
    }
    else if(umber.value.trim()==""){
        alert("please Enter number");
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
    else if(pwd.value!=cpwd.value){
        alert("password does not match");
        return false;
    }
}

function validate(){
    let form = document.getElementById("form");
    let email = document.getElementById('email').value;
    let number=document.getElementById('number').value;
    let text =document.getElementById("text");
    let regexp = /^[^ ]+@+[a-z]{3,7}\.[a-z]{2,3}/;
    let numbers= /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

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
    if (number.match(numbers)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        textn.innerHTML="Your Number is valid";
        textn.style.color="#00ff00"; 
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
        textn.innerHTML="Enter valid Number";
        textn.style.color="#ff0000";
    }

    }
  
    function passwordChanged() {
        var strength = document.getElementById('strength');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        let pwd = document.getElementById("exampleInputPassword1");
        if (pwd.value.length == 0) {
            strength.innerHTML = 'Type Password';
        }
         else if (false == enoughRegex.test(pwd.value)) {
            pwd.style.border="2px solid green"
            strength.innerHTML = 'More Characters';
        }
         else if (strongRegex.test(pwd.value)) {
            strength.innerHTML = '<span style="color:green">Strong!</span>';
        }
         else if (mediumRegex.test(pwd.value)) {
             pwd.style.border="2px solid orange";
            strength.innerHTML = '<span style="color:orange">Medium!</span>';
        }
         else {
             pwd.style.border="2px solid red";
            strength.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }
    function passwordConfirm() {
        var textc = document.getElementById('textc');
        var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{8,}).*", "g");
        let cpwd = document.getElementById("exampleInputPassword2");
        if (cpwd.value.length == 0) {
            textc.innerHTML = 'Type Password';
        }
         else if (false == enoughRegex.test(cpwd.value)) {
            cpwd.style.border="2px solid green"
            textc.innerHTML = 'More Characters';
        }
         else if (strongRegex.test(cpwd.value)) {
            textc.innerHTML = '<span style="color:green">Strong!</span>';
        }
         else if (mediumRegex.test(cpwd.value)) {
             cpwd.style.border="2px solid orange";
             textc.innerHTML = '<span style="color:orange">Medium!</span>';
        }
         else {
             cpwd.style.border="2px solid red";
             textc.innerHTML = '<span style="color:red">Weak!</span>';
        }
    }
