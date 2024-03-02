class User{
    _tel = ""

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

    constructor(name, age){
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old.`)
    }
}
