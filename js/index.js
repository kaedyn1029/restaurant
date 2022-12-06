let main=document.getElementById("main")
let test=get_menu()

function make_item(img_src,info_txt,nutrition_txt,price_txt){
    let item=document.createElement("div")
    item.classList.add("item")

//build top
    let img_div=document.createElement("div")
    img_div.classList.add("image")

    let img=document.createElement("img")
    img.src=img_src

    let info=document.createElement("p")
    info.innerHTML=info_txt+"<br><b>"+nutrition_txt+"</b>"

    img_div.appendChild(img)
    img_div.appendChild(info)


//build bottom
    let price_div=document.createElement("div")
    price_div.classList.add("price")

    let price=document.createElement("p")
    price.innerHTML=price_txt

    let input=document.createElement("input")
    input.type="number"
    input.value=0

//build item
    price_div.appendChild(input)
    price_div.appendChild(price)

    item.appendChild(img_div)
    item.appendChild(price_div)

//add item
    main.appendChild(item)
}

function spawn_items(){
    for (let x in test){
        for (let i=0;i<test[x].length;i++){
            if(i!=0){
                make_item(test[x][i].img, test[x][i].about, test[x][i].health, test[x][i].price)
                continue
            }else{
                make_section(test[x][i]) //name of section
                continue
            }
        }
    }
}

function make_section(name){
    let line=document.createElement("br")
    line.id=name
    main.appendChild(line)

    let section_title = document.createElement("h3");
    section_title.innerHTML = name;
    main.appendChild(section_title);
}
