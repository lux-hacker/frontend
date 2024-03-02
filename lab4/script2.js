function loadImg(url){
    return new Promise(function(resolve, reject){
        let img = new Image()
        img.src = url
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error("Can’t load image"))
    }) 
}

let img_div = document.getElementById("img_div")
let promises = []

for(i = 1; i <= 5; i++){
    let imgURL = prompt("Введите ссылку на картинку " + i)
    let promise = loadImg(imgURL)
    promises.push(promise)
}

Promise.allSettled(promises).then(images => {
    for(img of images){
        if(img.status === "fulfilled"){
            img_div.append(img.value, document.createElement("br"))
        } else {
            let p = document.createElement("p")
            p.innerText = img.reason
            img_div.append(p, document.createElement("br"))
        }
    }
})