const btn = document.getElementById("btn_load")
const tableContainer = document.getElementById("table-data")

btn.addEventListener("click", e => {
    /*Con el metodo fetch (otra manera de realizar AJAX) le decimos de donde sacaremos la informacion (URL o endpoint), posteriormente con .then() le diremos esa informacion
    como la procesaremos, en este caso como texto plano y posteriormente que haremos con esa informacion obtenida, otra vez con .then() entonces le diremos
    que la implementaremos o plazmaremos dentro del div o elemento capturado del HTML, por ultimo con el .catch() en caso de error al traer la informacion igual
    la podremos agregar dentro del HTML o la consola*/
    fetch("http://localhost:8080/tabla.html").then(response => response.text())
    .then(response => {
        tableContainer.innerHTML = response
    })
    .catch(err => {
        console.error(err)
        tableContainer.innerHTML = err
    })
})