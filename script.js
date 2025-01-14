const form = document.getElementById("pokemon-form");
const input = document.getElementById("pokemon-name");
const pokemonInfoDiv = document.getElementById("pokemon-info");

async function fetchPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) {
            throw new Error("Pokemon no encontrado");
        }

        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        pokemonInfoDiv.innerHTML = `<p>${error.message}</p>`;
        pokemonInfoDiv.style.display = "block";
    }
}
