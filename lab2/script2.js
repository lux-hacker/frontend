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
    for(let i = 2; i < 10000; i++){
        if(isPrime(i) == true){
            arr.push(i)
            count++
        }
        if(count == n){
            break
        }
    }
    return arr
}

let n = Number(prompt("Enter N"))
let arr = getNPrimeNums(n)
alert(arr.join(" "))