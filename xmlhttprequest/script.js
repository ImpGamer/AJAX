const btn = document.getElementById("btn_load")
const tableContainer = document.getElementById("table-data")

btn.addEventListener("click", e => {
    //Objeto que nos permite comunicarnos con el servidor mediante JS
    const xhr = new XMLHttpRequest()
    /*La funcion open nos pedira 3 parametros.
    1. El metodo HTTP que se realizara
    2. La endpoint o URL donde tomaremos esos datos
    3. Si la conexion es asincrona, en este caso claro que la es*/
    xhr.open("get","http://localhost:8080/tabla.html",true)

    //Que debe hacer cuando reciba la data (evento load, se ejecutara cuando la data se cargue completa)
    xhr.addEventListener("load",event => {
        /*Dentro de nuestro DIV caputrado le pondremos la informacion capturada, donde el .target.responeText sera que la informacion recibida la procesaremos
        como texto plano, en este caso ese texto plano es HTML por lo que me traera tal y como esta estructurado el HTML*/
        tableContainer.innerHTML = event.target.responseText
    })
    //Ejecutamos la peticion
    xhr.send()
})