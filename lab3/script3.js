function med(...args){
    args.sort((a, b) => a - b)
    if (args.length % 2 == 1){
        return args[(args.length - 1) / 2]
    }
    return (args[args.length / 2] + args[args.length / 2 - 1]) / 2
}

console.log(med(5, 3, 9, 1, 0))
const arr = [5, 3, 9, 1, 0, 5, 3, 9, 1, 0]
console.log(med(...arr))