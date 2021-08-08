/*
    API Project 1 - Pokemon API selected for project.

    Criteria:
        Pull data from an API that we have provided
        Utilize GET only
        Be as creative as you like
        The selected API and display of the data should differ from the examples given in class.
 
*/

/*
    I want to display the three pokemon with the following info pulled from the API:
    
    name, id number, type
*/
const mainEndpoint = "https://pokeapi.co/api/v2/pokemon?limit=151"
// const squirtleUrl = "https://pokeapi.co/api/v2/pokemon/7/"
// const pikachuUrl = "https://pokeapi.co/api/v2/pokemon/25/"
// const mewtwoUrl = "https://pokeapi.co/api/v2/pokemon/150/"
let pokeName = document.createElement('h4') 
let pokeID = document.createElement('p')
let pokeTypes = document.createElement('ul')

function fetchPokemon() {
    fetch(mainEndpoint) 
    // Limited the search call because a fetch sent to the base endpoint (without "?limit=151") only returns a small number of results - and I need specific results numbering up to 150 for Mewtwo. I saved the three specific endpoints needed in a const for each url so I could write separate functions for each pokemon, but this ended up not working as expected so I just coded the DOM output into the fetch commands for each step. There is probably a more efficient way to write this.
    .then (results => results.json())
    //.then (pokemon => console.log(pokemon.results, pokemon.results[6].name, pokemon.results[24].name, pokemon.results[149].name))
    .then (pokemon => {
        let url1=pokemon.results[6].url
        let url2=pokemon.results[24].url
        let url3=pokemon.results[149].url
        fetch(url1) //Squirtle
        .then (response => response.json())
        //.then (squirtle => console.log(squirtle))
        .then (squirtle => {
            let pokemonDiv = document.getElementById('squirtleDiv');
            let pokeContainer = document.createElement('div')

            let pokeName = document.createElement('h4') 
            pokeName.innerText = squirtle.name

            let pokeNumber = document.createElement('p')
            pokeNumber.innerText = `#${squirtle.id}`
   
            let pokeTypes = document.createElement('ul') //ul holds the pokemon types
  
            createTypes(squirtle.types, pokeTypes) // helper function to go through the types array and create li tags for each one

            pokeContainer.append(pokeName, pokeNumber, pokeTypes);
            pokemonDiv.appendChild(pokeContainer); 
        })
        fetch(url2) //Pikachu
        .then (response => response.json())
        //.then (pikachu => console.log(pikachu))
        .then (pikachu => {
            let pokemonDiv = document.getElementById('pikachuDiv');
            let pokeContainer = document.createElement('div')

            let pokeName = document.createElement('h4') 
            pokeName.innerText = pikachu.name

            let pokeNumber = document.createElement('p')
            pokeNumber.innerText = `#${pikachu.id}`
   
            let pokeTypes = document.createElement('ul') //ul holds the pokemon types
  
            createTypes(pikachu.types, pokeTypes) // helper function to go through the types array and create li tags for each one

            pokeContainer.append(pokeName, pokeNumber, pokeTypes);
            pokemonDiv.appendChild(pokeContainer); 
        })
        fetch(url3) //Mewtwo
        .then (response => response.json())
        //.then (mewtwo => console.log(mewtwo))
        .then (mewtwo => {
            let pokemonDiv = document.getElementById('mewtwoDiv');
            let pokeContainer = document.createElement('div')

            let pokeName = document.createElement('h4') 
            pokeName.innerText = mewtwo.name

            let pokeNumber = document.createElement('p')
            pokeNumber.innerText = `#${mewtwo.id}`
   
            let pokeTypes = document.createElement('ul') //ul will hold the pokemon types
  
            createTypes(mewtwo.types, pokeTypes) // helper function to go through the types array and create li tags for each one

            pokeContainer.append(pokeName, pokeNumber, pokeTypes);
            pokemonDiv.appendChild(pokeContainer); 
        })
    })
    .catch (error => console.log(error))
}

function createTypes(types, ul) {
    types.forEach(function(type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = 'Type(s): ' + type['type']['name'];
        ul.append(typeLi)
    })
}

fetchPokemon();