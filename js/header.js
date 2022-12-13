let spawnpoint=document.getElementById("spawnpoint")
let bttn=document.getElementById("but")
let test=get_menu()
let img=document.getElementById("logo")

function make_item(name){
    let link=document.createElement("a")
    link.innerHTML=name
    link.href="index.html#"+name
    spawnpoint.appendChild(link)
    }

function start(){
    let mode=localStorage.getItem("mode")
    console.log(mode)
    if(mode=="dark"){
        console.log("hi")
        change_mode()
    }else{
        parent.document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    }
    for (let x in test){
                make_item(test[x][0])
    }
    if(localStorage.getItem("login")!==""){
        let log=document.getElementById("log")
        log.innerHTML=JSON.parse(localStorage.getItem(localStorage.getItem("login"))).username
    }
    load_logo()
}

function change_mode(){
    if(bttn.value==0){
        bttn.innerHTML="&#127761;"
        bttn.value=1
        parent.document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("mode", "light")

    }else if(bttn.value==1){
        bttn.innerHTML="&#127765"
        bttn.value=0
        parent.document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("mode", "dark")

    }
    
}

function load_logo(){
    img.src=localStorage.getItem("logo")
}
