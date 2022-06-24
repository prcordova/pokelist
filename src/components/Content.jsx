import React, { useState, useEffect } from 'react';
import styles from './Content.module.css'
import api from '../services/Api'
import { Pokemon } from './Pokemon';
import SearchBar from './SearchBar/index'

function Content() {



    const [pokes, setPokes] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => response.json())
            .then(data => setPokes(data.results))
            .catch(error => console.log(error))

        console.log(pokes)

    }, [])

    const handleSearchPokemon = (e) => {
        const { value } = e.target;
        setSearchValue(value);
        console.log(searchValue)
    }
    return (
        <div className="container">
            <SearchBar
                onChange={handleSearchPokemon}
            />

            <div className={styles.wrapper}>
                <div className="container">
                    <div className="row">

                        <div class=" w-100">
                            {pokes.map(pokemon => {
                                return <Pokemon pokemon={pokemon} />
                            })}
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;