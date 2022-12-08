/*menu managment*/
function init(){
    let menu=[["test",{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"},{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"},{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"}],["test-1",{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"}]]
    let user={username:"test",email:"test@test.com",salt:""}
    localStorage.setItem("menu", JSON.stringify(menu))
    localStorage.setItem(user.email, JSON.stringify(user))
}

function get_menu(){
    let ret=JSON.parse(localStorage.getItem("menu"))
    return ret
}

function set_menu(menu){
    localStorage.setItem("menu", JSON.stringify(menu))
}

/*user managment*/
function get_user(email){
    return JSON.parse(localStorage.getItem(email))
}

function add_user(user){
    localStorage.setItem(user.email, JSON.stringify(user))
}

function remove_user(user){
    localStorage.clear(user.email)
}

function update_user(user){
    remove_user(user)
    add_user(user)
}


/*never do this in a real enviroment*/
function salt(pass){
    let salt=""
    for(let i=0;i<pass.length;i++){
        salt+=pass.charCodeAt(i)-1
    }
    return salt
}

function savelogo(file){
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        localStorage.setItem("logo",reader.result)
        logo_update()
    });
    reader.readAsDataURL(file)
}

function getimg(name){
    return localStorage.getItem(name)
}

