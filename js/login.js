let login_btn = document.getElementById("btn");
let email = document.getElementById("email");
let password = document.getElementById("pass");

function login(){
    if(email.value=="admin" && password.value=="admin")
        window.location.href="admin.html"
    if(check()){
        localStorage.setItem("login", email.value)
        window.location.href = "index.html"
    }
}

function remove(){
    if(check()){
        localStorage.removeItem(email.value)
    }
}

function load(){
    localStorage.setItem("login","")
}

function check(){
     if((email !== "") || (password !== "")){
         let user = get_user(email.value);
         if(user !== null){
             let real_pass = user.salt;
             if(real_pass == salt(pass.value)){
                 return true
             } else {
                 return false
             }
         } else {
             console.log("User does not exist");
         }
     } else {
         console.log("Input fields left blank");
     }
}
