const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const app = document.getElementById("app")
const asyncAwait = document.getElementById("asyncawait")
const btnFetch = document.getElementById("btnFetch")

const saludar = (name) => {
    /** 
    *? Cuando ejecutamos la funcion "saludar" podemos obtener 2 posibles respuestas "resolve" en caso de que salga correcta la promesa y "reject" en caso que ocurra un error
    */
    return new Promise((resolve, reject) => {
        //!La funcion timeout espera una funcion como parametro 1, y el timepo como segundo parametro
        /*Aqui se esta simulando que estamos haciendo una peticion a una API, pero el proceso es tardio, en este caso 2 segundos para
        que me realice o asigne la informacion*/
        setTimeout(() => {
            //? En el caso que el parametro sea vacio arrojaremos un error, si no devolveremos el saludo
            if(name === "") {
                reject("El nombre no puede estar vacio")
            } else {
                resolve(`Hola ${name}`)
            }
        }, 2000)

    })
}
const write = (data) => {
    app.innerText = data
}
//*Como tarda en traer la informacion me traera un dato nulo, incompleto o prometido
normal.addEventListener("click", () => {
    console.log(`Comienza el proceso...`)
    //*Aqui llamamos a la funcion donde agarraremos los datos y los almacenamos dentro de "resp"
    const resp = saludar("David")
    //!Una vez obtenida la data ahora lo vamos a plasmar en el HTML con la funcion "write()"
    write(resp)
    console.log("Termina el proceso, la informacion debe ser visible")
})
//!Trae un resultado: verdadero o falso en caso que la informacion llegue correcta o incorrecta pero ejecuta la funcion completa sin esperar la respuesta
promesa.addEventListener("click",() => {
    console.log(`Comienza el proceso...`)
    /** 
     *Funcion saludar() que nos puede traer un error o correcto, dependiendo de la logica y tiempo de respuesta del servidor,
     ahora como podemos especificarle que hacer en ambos casos, en donde puede salir bien o darme un error, con los metodos .then()
     para caso correcto, y .catch() en caso de error
    */
   //*En .then llamamos a la funcion write() en caso de que la respuesta sea correcta
   //!En .catch() igualmente lo imprimiremos en el HTML, pero sera el caso de error
    saludar("David")
    .then(response => write(response))
    .catch(response => {
        write(response)
        console.error("Hay un error: "+response)
    })
    console.log("Termina el proceso, la informacion debe ser visible")
})
//?Espera la respuesta verdadera o falsa, y no terminara la funcion hasta que la respuesta sea dada por parte del servidor
asyncAwait.addEventListener("click", async () => {
    console.log(`Comienza el proceso`)
    //!Le estamos diciendo que espere a que la funcion saludar() termine para continuar con el programa
    try {
        const resp = await saludar("")
        write(resp)
    }catch(error) {
        console.log(error)
        write(`Error: ${error}`)
    }
    console.log(`Termino el proceso...`)
})

//?Claro que este metodo tambien puede usar awaitAsync para esperar a que la funcion acabe para continuar
btnFetch.addEventListener("click",async () => {
    //!EndPoint donde agarraremos los datos y luego como los trataremos, en este caso como un json, pero esto devuelve otra promesa por lo que hay volver a capturar un posible error con .then() y .catch()
    // fetch("http://localhost:5500")
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(error => console.log(error))

    //Usando await
    try {
        //*Podemos consultar el estatus de la respuesta por parte del fetch()
        const response = await fetch("http://localhost:5500")
        //!Le estamos diciendo si el status de la respuesta es diferente a un codigo 200 (OK) entonces realice lo siguiente:
        if(response.status !== 200) {
            const message = await response.text() //Ya dependiendo como puedes recibir el mensaje, como texto plano o JSON
            console.log(`Algo salio mal! ${message}`)
            return
        }
        const data = await response.json()
        console.log(data)
    }catch(error) {
        console.error(`Error no recibimos ningun JSON: ${error}`)
    }
})