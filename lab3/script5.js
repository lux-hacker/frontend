function copy(obj){
    let copy_obj = JSON.parse(JSON.stringify(obj))
    return copy_obj
}

let obj = {
    name: "Hello",
    age: 15,
    things: [1, 2, 3, 4, 5],
    head: {
        brain: "Cool",
        hair: 10
    }
}