let password = document.getElementById("pass");
let password_verify = document.getElementById("pass_verify");
let form = document.getElementById("sign");
let error = document.getElementById("invalid_error");
function verify_pass(){
    if(password.value !== password_verify.value){
        error.innerHTML = "Your passwords do not match!";
        error.style.color = "red";
        error.style.fontSize = "0.75em";
    } else {
        error.innerHTML = "";
    }
}
