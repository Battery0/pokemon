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
        //console.log(data.types);
        data.types.forEach((element) => {
          //console.log(element.type.name); //strings
          pokemon.setTypes(element.type.name);
          //console.log(pokemon.setTypes());
        //pokemon.types.push(element.type.name)
        //console.log(pokemon.types);
      })

      pokemon.returnTypes();

    })

  })
  
})