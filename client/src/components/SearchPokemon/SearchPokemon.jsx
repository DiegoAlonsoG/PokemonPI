import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPokemons } from '../../redux/actions'
import style from "./SearchPokemon.module.css"

export default function SearchPokemon () {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    function onSubmit(e) {
        e.preventDefault();
        // console.log(search)
        dispatch(searchPokemons(search))
        .then((rpta) => {
            if (rpta === undefined) {
                alert(`There's no Pokemon with that name`)
            }
        })
        document.getElementById('searchButton').value=''
    }
    function onInputChange (e) {
        e.preventDefault();
        // console.log(e.target.value)
        setSearch(e.target.value)
    }
    return <div> 
        <form className={style.search} onSubmit={onSubmit}>
            <input className={style.input} type="text" id='searchButton' onChange={onInputChange} value={search} placeholder="Write a name..."/>
            <button className={style.boton} type="submit" >
                Search!
            </button>
        </form>
    </div>
}
