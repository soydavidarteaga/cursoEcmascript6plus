let array = [1,2,3,[1,2,3, [1,2,3]]];

//flat, permite devolver una matriz con cualquier submatriz aplanada
console.log(array.flat(2));

// flat map, permite mapear cada elemento y pasar una funcion y aplanarlo segun el resultado
let array2 = [1,2,3,4,5];
 
console.log(array2.flatMap(value => [value, value * 2]));

// stringStart, permite eliminar espacios en blanco de un string
let hello = '           hello world';
console.log(hello)
console.log(hello.trimStart())

    //Eliminar espacios al final
    let hello2 = 'hello world           ';
    console.log(hello2)
    console.log(hello2.trimEnd());

// Opcional CatchBinding, se puede pasar de forma opcional el parametro de error al try catch
try {

} catch {
    error
}

// frontEntries, transforma clave valor en un objecto
let entries = [["name", "oscar"],["age", 22]];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo, permite acceder a una descripcion
let mySymbl = `My symbol`
let symbol = Symbol(mySymbl)
console.log(symbol.description)