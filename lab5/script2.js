function User(name, age){
    this.name = name
    this.age = age
}

User.prototype.hello = function(){
    console.log(`Hi! My name if ${this.name}. And I am ${this.age} years old.`)
}