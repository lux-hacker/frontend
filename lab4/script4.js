async function loadImg(url){
    let response = await fetch(url)
    if (response.ok){
        let blob = await response.blob()
        let img = new Image()
        img.src = URL.createObjectURL(blob)
        return img
    }
    throw new Error()
}

async function loadImgs(...imgURLs){
    let imgs = []
    for(url of imgURLs){
        try{
            let img = await loadImg(url)
            imgs.push(img, document.createElement("br"))
        } catch(e){
            let p = document.createElement("p")
            p.innerText = "Can’t load image"
            imgs.push(p, document.createElement("br"))
        }
    }
    return imgs
}

let img_div = document.getElementById("img_div")
let urls = []

for(i = 1; i <= 5; i++){
    let imgURL = prompt("Введите ссылку на картинку " + i)
    urls.push(imgURL)
}

loadImgs(...urls).then(
    result => {img_div.append(...result)}
)
