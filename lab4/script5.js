let ips = []
for(i = 0; i < 5; i++){
    ips.push(prompt("Enter IP " + (i + 1)))
}

let flag = true
let url = "https://json.geoiplookup.io/"
let counties = ["Russia", "Belarus", "Afghanistan", "China", "Venezuela", "Iran"]

async function getGeoIP(ip){
    let response = await fetch(ip)
    return response.json()
}

let promises = []

for(ip of ips){
    promises.push(getGeoIP(url + ip))
}

Promise.allSettled(promises).then((result) => {
    for (json of result){
        if (counties.includes(json["value"]["country_name"])){
            flag = false
        }
    }
}).finally(()=>{
    if (!flag){
        alert("Our services are not available in your country")
    } else {
        alert("Welcome to our website!")
    }
})