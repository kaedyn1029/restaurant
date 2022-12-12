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
    parent.document.documentElement.setAttribute('data-theme', 'light');
    for (let x in test){
                make_item(test[x][0])
    }
    load_logo()
}

function load_logo(){
    img.src=getimg("logo")
}

function change_mode(bttn){

    if(bttn.value==0){
        bttn.innerHTML="&#127761;"
        bttn.value=1
        parent.document.documentElement.setAttribute('data-theme', 'light');
    }else if(bttn.value==1){
        bttn.innerHTML="&#127765"
        bttn.value=0
        parent.document.documentElement.setAttribute('data-theme', 'dark');

    }
    
}
