import React, { useState } from 'react'
import axios from 'axios'

const AxiosComponent = () => {
    const [pokemonList, setPokemonList] = useState([])

    const fetchPokemonAxios = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit807`)
            .then(response => {
                console.log(response.data.results)
                setPokemonList(response.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="mt-2">POKEMON API</h1>
                <button onClick={fetchPokemonAxios} className="btn btn-outline-dark bg-warning text-dark mt-1 mb-2 py-1">.axios search pokemon</button>
            </div>
            <div className="list d-flex justify-content-center">
                <ul>
                    {pokemonList && pokemonList.map((pokemon, i) => {
                        return (
                            <li key={i}>{pokemon.name}</li>
                        )
                    })
                    }
                </ul>
            </div>

        </>
    )
}

export default AxiosComponent