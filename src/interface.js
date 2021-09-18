document.addEventListener('DOMContentLoaded', () => {


  document.getElementById('pokemon-form').addEventListener('submit', () => {

    let name = document.getElementById('pokemon-name').value
    event.preventDefault();
    console.log(name);
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`
 
    const pokemon = new Pokemon(name)

    fetch(pokemonUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.types.forEach((element) => {
          pokemon.setTypes(element.type.name);
        })
      //console.log(pokemon.returnTypes()); //returns array of pokemon types

      pokemon.returnTypes().forEach(element => {
        const h2 = document.createElement('h2')
        h2.innerText = element
        document.querySelector('body').appendChild(h2)
      });
    })

  })
  
})