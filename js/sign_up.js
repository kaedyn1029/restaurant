let password = document.getElementById("pass");
let password_verify = document.getElementById("pass_verify");
let form = document.getElementById("sign");
let error = document.getElementById("invalid_error");
let email = document.getElementById("email");
let user = document.getElementById("username");

function verify_pass(){
    if((password.value == "" || password_verify.value == "") || (password.value !== password_verify.value)){
        error.innerHTML = "Your passwords do not match or have been left blank!";
        return false;
    } else {
        error.innerHTML = "";
        account_gen();
        return true;
    }
}

function verify_email(e){
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e = email.value;
    if(format.test(e) == false){
        error.innerHTML = "You have entered an invalid email address"; 
        return false;
    }else if(get_user(e) !== null){
        error.innerHTML = "An account under this email already exists."
        return false;
    } else {
        error.innerHTML = "";
        verify_pass();
        return true;
    }
}

function verify_username(){
    if(user.value == ""){
        error.innerHTML = "You must enter a username";
        return false;
    } else {
        error.innerHTML = "";
        verify_email();
        return true;
    }
}

function account_gen(){
    let ret={username:"",email:"",salt:""}
    ret.username = user.value;
    ret.email = email.value;
    ret.salt = salt(password.value);
    console.log("account generated"); 
    add_user(ret);
}
