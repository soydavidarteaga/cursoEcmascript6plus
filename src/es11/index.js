const button = document.getElementById('btn')
 
//Dinamic import 
button.addEventListener("click", async function () {
    const module = await import('./file.js')
    module.hello();
});