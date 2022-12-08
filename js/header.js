let spawnpoint=document.getElementById("spawnpoint")
let test=get_menu()
let img=document.getElementById("logo")

function make_item(name){
    let link=document.createElement("a")
    link.innerHTML=name
    link.href="index.html#"+name
    spawnpoint.appendChild(link)
    }

function start(){
    for (let x in test){
                make_item(test[x][0])
    }
    load_logo()
}

function load_logo(){
    console.log(img)
    img.src=getimg("logo")
}
