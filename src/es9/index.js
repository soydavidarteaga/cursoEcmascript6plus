// Operador de reposo, la cual puede extraer las propiedades de un objecto que aun no se han construido
const obj = {
    name: 'David',
    age: 22,
    country: 'VE'    
}

let { name, ...all } = obj
console.log(all);

const obj2 = {
    name: 'David',
    age: 22
}

const obj3 = {
    ...obj2,
    country: 'VE'
}

console.log(obj3)

// Promise .finally, para saber cuando ha terminado el llamado y poder ejecutar otra algo
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(resolve('Hellow world'), 3000)
        : reject(new Error('Test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo operacion'))


// Agrupar bloques del regex y poder acceder a cada una de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)