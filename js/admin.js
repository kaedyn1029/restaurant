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
    let img=document.createElement("input")
    let about=document.createElement("input")
    let helth=document.createElement("input")
    let price=document.createElement("input")

    img.type="file"
    div.appendChild(img)
    div.appendChild(about)
    div.appendChild(helth)
    div.appendChild(price)

    caller.parentElement.appendChild(div)
}
