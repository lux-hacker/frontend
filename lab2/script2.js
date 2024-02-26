function isPrime(num){
    let is_prime = true
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            is_prime = false
            break
        }
    }
    return is_prime
}

function getNPrimeNums(n){
    let arr = []
    let count = 0
    let i = 2
    while(count < n){
        if(isPrime(i) == true){
            arr.push(i)
            count++
        }
        i++
        
    }
    return arr
}

let n = parseInt(prompt("Enter N"))
let arr = getNPrimeNums(n)
alert(arr.join(" "))