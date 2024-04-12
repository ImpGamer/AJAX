const myForm = document.getElementById("form")
const startsWith = document.getElementById("startsWith")
const btnSearch = document.getElementById("btnSearch")
const myContent = document.getElementById("content")
const apiKey = "d6e43bbc086f1506476512c8e2d7b3e0"

//! Prevenimos que el "button" haga la accion de submit predeterminada
myForm.addEventListener("submit", e => e.preventDefault())

const draw = heroes => {
    myContent.innerHTML = ""
    //Objeto que se comporta como una lista "liviana" de esa manera no saturamos la insercion de datos al DOM, y lo hacemos directo
    //insertando el DocumentFragment
    const fragment = document.createDocumentFragment()

    heroes.forEach(hero => {
        const container = document.createElement('div')
        const title = document.createElement('h2')
        const description = document.createElement('p')
        const image = document.createElement('img')

        title.textContent = hero.name
        description.textContent = hero.description
        image.src = `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`

        container.appendChild(title)
        container.appendChild(image)
        container.appendChild(description)
        fragment.appendChild(container)
    })
    myContent.appendChild(fragment)

}

btnSearch.addEventListener("click", async () => {
    const encodedName = encodeURI(startsWith.value)
    const marvelURL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${encodedName}&apikey=${apiKey}`
    let resp = await axios.get(marvelURL)
    console.log(resp.data.data.results)
    const heroes = resp.data.data.results
    draw(heroes)
})