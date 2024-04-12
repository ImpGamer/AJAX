const myForm = document.getElementById("myForm")
const title = document.getElementById("title")
const author = document.getElementById("author")
const btnCreate = document.getElementById("btnCreate")

myForm.addEventListener('submit',(e) => {
    //Funcion para que cuando el usuario presione el boton o "submit" no lo haga de manera default o tradicional
    e.preventDefault()
})

btnCreate.addEventListener('click', async ()=> {
    const post = {
        title: title.value,
        author: author.value
    }

    const myInit = {
        method: "POST",
        body: JSON.stringify(post)
    }

    try {
        const response = await fetch("http://127.0.0.1:5500/fetch/init/form.html",myInit)
        if(response.status !== 201) {
            console.error("Ha ocurrido un error")
            return
        }
        const data = await response.json()
        console.log("Recurso creado correctamente!",data)
    }catch(err) {
        console.error(`Se a provocado un error: ${err}`)
    }
})