let main=document.getElementById("main")
let test=[["test",{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"},{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"},{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"}],["test-1",{img:"../images/cat.jpg",about:"test item",health:"bad",price:"17"}]]

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
            if(i==0){
            }else{
                make_item(test[x][i].img, test[x][i].about, test[x][i].health, test[x][i].price)
                console.log(test[x][i])
            }
        }
    }
}
