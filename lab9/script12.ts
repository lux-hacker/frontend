class User {
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    hello(){
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old`);
    }
}

type MyType = User;