function loadImg(url){
    return new Promise(function(resolve, reject){
        let img = new Image()
        img.src = url
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error("Can’t load image"))
    }) 
}

function loadImgs(...imgURLs){
    
}

let img_div = document.getElementById("img_div")
let promises = []

for(i = 1; i <= 5; i++){
    let imgURL = prompt("Введите ссылку на картинку " + i)
    let promise = loadImg(imgURL)
    promises.push(promise)
}

for(promise of promises){
    promise.then(
        img => {img_div.append(img, document.createElement("br"))},
        error => {
            let p = document.createElement("p")
            p.innerText = error.message
            img_div.append(p, document.createElement("br"))
        }
    )
}
