let spawnpoint=document.getElementById("spawnpoint")
let test=get_menu()

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
}
