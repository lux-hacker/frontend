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

console.log(obj)
let cobj = copy(obj)
cobj.age = 20
cobj.things[0] = 20
cobj.head.hair = "Brown"
console.log(cobj)