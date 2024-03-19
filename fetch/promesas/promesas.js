const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const app = document.getElementById("app")
const asyncAwait = document.getElementById("asyncawait")

const saludar = (name) => {
    let response = null
    //!La funcion timeout espera una funcion como parametro 1, y el timepo como segundo parametro
    /*Aqui se esta simulando que estamos haciendo una peticion a una API, pero el proceso es tardio, en este caso 2 segundos para
    que me realice o asigne la informacion*/
    setTimeout(() => {
        response = `Hola ${name}`
    },2000)

    return response 
}
const write = (data) => {
    app.innerText = data
}
normal.addEventListener("click",() => {
    console.log(`Comienza el proceso...`)
    //*Aqui llamamos a la funcion donde agarraremos los datos y los almacenamos dentro de "resp"
    const resp = saludar("David")
    //!Una vez obtenida la data ahora lo vamos a plasmar en el HTML con la funcion "write()"
    write(resp)
    console.log("Termina el proceso, la informacion debe ser visible")
})