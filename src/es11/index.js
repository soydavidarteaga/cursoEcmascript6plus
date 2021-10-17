const button = document.getElementById('btn')
 
//Dinamic import 
button.addEventListener("click", async function () {
    const module = await import('./file.js')
    module.hello();
});

//Caracteristicas importantes
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber)
console.log(anotherBigNumber)

//Promise or allSetled
const promise1 = new Promise((resolve, reject) => reject('reject'))
const promise2 = new Promise((resolve, reject) => resolve('resolve'))
const promise3 = new Promise((resolve, reject) => resolve('resolve'))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

//Global this
console.log(window);
console.log(globalThis);

//Operador nullo
const foo = null ?? 'default string';
console.log(foo);

//Opcional sheining
const user = {};
console.log(user?.profile?.email)
if(user?.profile?.email)
{
    console.log('email')
}else {
    console.log('fail')
}