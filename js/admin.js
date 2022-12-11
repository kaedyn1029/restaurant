img=document.getElementById("imgButton")
logoimg=document.getElementById("logoImg")
section=document.getElementById("menuItems")
buttons=[]

function change_logo(){
    savelogo(img.files[0])
    logo_update()
}

function logo_update(){
    logoimg.src=getimg("logo")
}

function add_section(add=true){
    let li=document.createElement("li")
    let name=document.createElement("input")

    name.type="text"
    li.innerHTML="<button onclick='add_item(this)'>+</button><button onclick='remove_item(this)'>-</button>"
    li.appendChild(name)
    section.appendChild(li)
    if(add)
        add_item(li.children[0])
    return li
}

function remove_item(sec){
    let arr=sec.parentElement.children
    let el=arr[arr.length-1]
    if (arr.length>4)
        el.remove()
}

function remove_section(){
    let arr=section.children
    arr[arr.length-1].remove()
}

function add_item(caller){
    //gen items
    let div=document.createElement("div")
    let img_up=document.createElement("input")
    let img_dat=document.createElement("img")
    let about=document.createElement("input")
    let health=document.createElement("input")
    let price=document.createElement("input")

    //set attribs
    about.setAttribute("placeholder","Brief item description");
    health.setAttribute("placeholder","Nutritional information");
    price.setAttribute("placeholder","Price");
    img_up.type="file"
    img_up.addEventListener("change",()=>{change_menu_img(img_up)})
    img_dat.src=""

    //output
    div.appendChild(img_dat)
    div.appendChild(img_up)
    div.appendChild(about)
    div.appendChild(health)
    div.appendChild(price)
    caller.parentElement.appendChild(div)
    return div
}

function change_menu_img(bttn){
    look=bttn.parentElement.children[0]
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{look.src=reader.result})
    reader.readAsDataURL(bttn.files[0])
}

function save(){
    let menu=[]
    for(let i=0;i<section.children.length;i++){
        let sect=[]
        sect.push(section.children[i].children[2].value)
        for (let j=3;j<section.children[i].children.length;j++){
            let item=section.children[i].children[j].children
            let ret={img:"",about:"",health:"",price:""}
            ret.img=item[0].src
            ret.about=item[2].value
            ret.health=item[3].value
            ret.price=item[4].value
            sect.push(ret)
        }
        menu.push(sect)
    }
    set_menu(menu)
}

function load(){
    logo_update()
    let test=get_menu()
    let sec
    for (let x in test){
        for (let i=0;i<test[x].length;i++){
            if(i!=0){
                let pos=add_item(sec.children[0]).children
                pos[0].src=test[x][i].img
                pos[2].value=test[x][i].about
                pos[3].value=test[x][i].health
                pos[4].value=test[x][i].price
                continue
            }else{
                sec=add_section(false)
                sec.children[2].value=test[x][i]
                continue
            }
        }
    }
}
