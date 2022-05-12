import React, {useState} from 'react';

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([])

    const gatherPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
        }).then(pokeResponse => {
            console.log(pokeResponse.results);
            // set state var here
            setPokemon(pokeResponse.results)
        }).catch(err=>{
            console.log(err);
        });
    }

    return(
        <div>
            <button onClick={gatherPokemon}>Fetch Pokemon</button>
            <br/>
            {
                pokemon.map((pokemon, idx) => {
                    return(
                        <div key={idx}>
                            <li>{pokemon.name}</li>
                        </div>
                    )
                }) 
            }
        </div>
    )
}
export default Pokedex;