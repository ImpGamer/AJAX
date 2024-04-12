//EndPoint de nuestra API
//!Metodo .get() para referenciar que HTTP method usaremos
axios.get("https://pokeapi.co/api/v2/type/1/")
//En caso de que si encuentre la API me traera los datos
.then(response => console.log(response))
//En caso de que no encuentre la API y genere un error igualmente me lo hara saber
.catch(error => console.error("No se pudo consumir la API: "+error))    