// Entries, 
const data = {
    frontend: 'Oscar',
    backed: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)


// Values 
const values = Object.values(data)
console.log(values)

//Padding
    //Es para agregar cadenas vacias o elementor a string
const string = 'hello'
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12, ' ======='))

//Truenly commas
    // Esto establece que hay o no un valor de en un objecto ejemplo
    let valores = { 
        uno: 'uno',
    }
    //Sin dar errores

// Async y Await
let helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello)
    }catch(error) {
        console.log(error)
    }
}

anotherFunction()