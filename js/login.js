let login_btn = document.getElementById("btn");
let email = document.getElementById("email");
let password = document.getElementById("pass");
function login(){
     if((email !== "") || (password !== "")){
         let user = get_user(email.value);
         if(user !== null){
             let real_pass = user.salt;
             if(real_pass == salt(pass.value)){
                 console.log("Verified");
             } else {
                 console.log("Unverified");
             }
         } else {
             console.log("User does not exist");
         }
     } else {
         console.log("Input fields left blank");
     }
}
