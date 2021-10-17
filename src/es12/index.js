// Replace all
const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web"
const replacedString = string.replace("Javascript", "Python")
console.log(replacedString) //Este solo reemplaza el primer elemento y no todos
const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2)

//A;adir prefijo, para decir que no se pueda acceder a un metodo privado
class Message {
    #show(val) {
        console.log(val)
    }
    get #add(val) {
        
    }
    set #set(val) {

    }
}

const message = new Message()
message.show("Hola!")

//Promise any -> Sirve para devolver la primera promesa que se haya resuelto
const promise1 = new Promise((resolve, reject) => reject("1"))
const promise2 = new Promise((resolve, reject) => resolve("1"))
const promise3 = new Promise((resolve, reject) => resolve("2"))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

//WeakRef -> Sirve para que este elemento no sea recogido por el garbage collector
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

//Nuevos operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse)

console.log(isTrue ||= isFalse)

console.log(isTrue ??= isFalse)