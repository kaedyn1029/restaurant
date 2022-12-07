img=document.getElementById("imgButton")
logoimg=document.getElementById("logoImg")


function change_logo(){
    saveimg(img.files[0], "logo")
    logo_update()
}

function logo_update(){
    logoimg.src=getimg("logo")
}

