img=document.getElementById("imgButton")
logoimg=document.getElementById("logoImg")
section=document.getElementById("menuItems")
buttons=[]

function change_logo(){
    saveimg(img.files[0], "logo")
    logo_update()
}

function logo_update(){
    logoimg.src=getimg("logo")
}

function add_section(){
    let li=document.createElement("li")
    let name=document.createElement("input")

    name.type="text"
    li.innerHTML="<button onclick='add_item(this)'>+</button>"
    li.appendChild(name)
    section.appendChild(li)
    add_item(li.children[0])
}

function add_item(caller){
    let div=document.createElement("div")
    let img_up=document.createElement("input")
    let img_dat=document.createElement("img")
    let about=document.createElement("input")
    let helth=document.createElement("input")
    let price=document.createElement("input")

    img_up.type="file"
    img_up.addEventListener("change",()=>{change_menu_img(img_up)})
    img_dat.src=""
    div.appendChild(img_dat)
    div.appendChild(img_up)
    div.appendChild(about)
    div.appendChild(helth)
    div.appendChild(price)
    caller.parentElement.appendChild(div)
}

function change_menu_img(bttn){
    look=bttn.parentElement.children[0]
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{look.src=reader.result})
    reader.readAsDataURL(bttn.files[0])
}

function save(){
    
}

function load(){

}
