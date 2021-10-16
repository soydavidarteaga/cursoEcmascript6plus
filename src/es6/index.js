//Antes de es6
function newFunction(name, age, country)
{
    var name = name || 'David'
    var age = age || 22
    var country = country || 'VE'
    console.log(name, age, country)
}
    //Template literal
    var hello = "Hello"
    var world = "World"
    var epicPhrase = hello+' '+world
    console.log(epicPhrase)

    //Multilineas
    var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting \n" + "Lorem Ipsum is simply dummy text of the printing and typesetting"
    console.log(lorem)
    
    //Destructurar Objectos
    let person = {
        'name': 'David',
        'age': 22,
        'country': 'VE'
    }
    console.log(person.name, person.age, person.country)


    console.log("AHORA ES CON ES6 \n")
//es6
function newFunction2(name = 'David', age = 22, country = 'VE')
{
    console.log(name, age, country)
}

newFunction2()
newFunction2('Alejandro', 32, 'CO');

    //Template literal
    let hello2 = "Hello"
    let world2 = "World"
    let epicPhrase2 = `${hello} ${world}`
    //console.log(epicPhrase2)

    //Multilineas
    let lorem2 = `Lorem Ipsum is simply dummy text of the printing and typesetting 
    Lorem Ipsum is simply dummy text of the printing and typesetting
    Lorem Ipsum is simply dummy text of the printing and typesetting`
    //console.log(lorem2)

    //Destructurar objetos
    let {name, age, country} = person
    console.log(name, age, country)

    //Spread
    let team1 = ['Oscar', 'Julian', 'Ricardo']
    let team2 = ['Valeria', 'Yessica', 'Camila']

    let education = ['David', ...team1, ...team2];
    console.log(education)

    //Que es let
        //Es una variable que solo esta disponible en el scope, y no de manera global como var
    // Que es const 
        // Es una variable que no cambia, una constante "const a = 'b'"

    //Asignacion de variables en objetoS
        //es5
        obj = {name: name, age: age}
        //es6
        obj2 = {name, age}
        console.log(obj2)

    //Arrow functions 
        // -> una sintaxis mas reducida, y un this no vinculable
    const names = [
        {name: 'David', age: 22},
        {name: 'Carlos', age: 30}
    ]

    let listOfNames = names.map(item => {
        console.log(item.name)
    });

    //Otra forma
    const listOfNames2 = (name, age) => {
        return `${name} ${age}`
    }

    const listOfNames3 = name => name

    const squeare = age => age * age

    //Promesas
    let helloPromise = () => {
        return new Promise((resolve, reject) => {
            if(true)
            {
                resolve('Hey')
            } else {
                reject("Ups");
            }
        })
    }

    helloPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err))

    //Clases
    class calculator {
        constructor() {
            this.valueA = 0
            this.valueB = 0
        }

        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB
        }

        rest(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA - this.valueB
        }        

        multiply(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA * this.valueB
        }        

        divi(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA / this.valueB
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2,2));

    // Importaciones 
    import { hello } from './module'

    hello();

    // Generator
        //Es una funcion especial que retorna una serie de valores, segun el algoritmo definido
    function* helloWorld() {
        if(true) {
            yield 'Hello, '
        }
        if(true) {
            yield 'World'
        }
    }

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);