/*
    API Project 1 - Pokemon API selected for project.

    Criteria:
        Pull data from an API that we have provided
        Utilize GET only
        Be as creative as you like
        The selected API and display of the data should differ from the examples given in class.
 
*/

const display = () => {

}

fetch('https://pokeapi.co/api/v2/pokemon/') // specific endpoint for the pokemon, use /{id or name}/ 
.then (results => results.json())
.then (pokemon => {
    console.log(pokemon)
})
.catch (error => console.log(error))