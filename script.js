class Human {
    constructor(obj) {
        this.name = obj.name //this bilan yaratiladi this bn chaqiriladi  
        this.age = obj.age
    }
    getInfo() {
        return `Your name is  ${this.name}. Your age is ${this.age}`
    }
}

// const Alisher = new Human({
//     name: 'Alisher',
//     age: 25
// })
// const Sardor = new Human({
//     name: 'Sardor',
//     age: 15
// })
// console.log(Alisher.getInfo());
// console.log(Sardor.getInfo());


class Woman extends Human { //extends voris oliw  Humandan malumot oladi
    constructor(el) {
        super(el) // malumotlarni tortib olish ushun super metodi 
        this.gender = 'female'
    }
}
const Ziyoda = new Woman({
        name: 'Ziyoda',
        age: 25
    })
    // console.log(Ziyoda.getInfo())
    //Your name is  Ziyoda. Your age is 25