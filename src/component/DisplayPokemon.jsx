import React, { useState } from 'react'
import axios from 'axios'

const DisplayPokemon = props => {
    const [pokemon, setPokemon] = useState({})
    const [pokemonName, setPokemonName] = useState("Your favorite Pokemon ...")


    const fetchPokemon = (e) => {
        e.preventDefault()
        console.log(pokemonName);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center pt-2">
                <h2 className="mt-2 mb-3">POKEMON API</h2>
                <form onSubmit={fetchPokemon}>
                    <div className="input-group">
                        <input type="text" className="form-Control bg-light ps-2" name="pokemonName" value={pokemonName}
                            onChange={(e) => setPokemonName(e.target.value)}
                            placeholder="Find your favorite pokemon ..."
                        />
                        <button type="button" className="btn bg-dark text-light" id="input-group-button-right">search pokemon</button>
                    </div>
                </form>
                {pokemon &&
                    <div className="mt-3">
                        <h3 className="text-warning">{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_shiny} alt="pokemon shiny front image"/>
                        <img src={pokemon.sprites.back_shiny} alt="pokemon shiny back image"/>
                        <img src={pokemon.sprites.front_default} alt="pokemon front image"/>
                        <img src={pokemon.sprites.back_default} alt="pokemon back image"/>
                    </div>
                }
            </div>
        </div>
    )
}

export default DisplayPokemon