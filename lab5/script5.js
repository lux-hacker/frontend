class User{
    __tel = ""
    __age = 0

    set tel(str){
        if(str.length == 12){
            if(str[0] == "+" && str[1] == "7"){
                this.__tel = str
                return
            }
        }
        console.log("Incorrect telephone")
    }

    get tel() {
        return this.__tel
    }

    set age(num){
        let buf = Number(num)
        if(!Number.isNaN(buf)){
            if(Number.isInteger(buf)){
                if (buf > 0 && buf < 101){
                    this.__age = buf
                    return
                }
            } 
        }
        console.log("Age must be integer")
    }

    get age() {
        return this.__age
    }

    constructor(name, age){
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old.`)
    }
}

class Student extends User{
    __knowledge = 0

    get knowledge(){
        return this.__knowledge
    }

    learn(){
        this.__knowledge++
    }

    hello(){
        console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old. And I am a student!`)
    }
}