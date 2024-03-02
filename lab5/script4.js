class User{
    _tel = ""
    _age = 0

    set tel(str){
        if(str.length == 12){
            if(str[0] == "+" && str[1] == "7"){
                this._tel = str
                return
            }
        }
        console.log("Incorrect telephone")
    }

    get tel() {
        return this._tel
    }

    set age(num){
        let buf = Number(num)
        if(!Number.isNaN(buf)){
            if(Number.isInteger(buf)){
                if (buf > 0 && buf < 101){
                    this._age = buf
                    return
                }
            } 
        }
        console.log("Age must be integer")
    }

    get age() {
        return this._age
    }

    constructor(name, age){
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old.`)
    }
}
