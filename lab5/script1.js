class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old.`)
    }
}
