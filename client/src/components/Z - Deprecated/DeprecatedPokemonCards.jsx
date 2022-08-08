// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import {getAllPokemons} from '../../redux/actions'
// // import PokemonCard from "../PokemonCard/PokemonCard"
// import Paginado from "../Paginado/Paginado"


// export default function PokemonCards () {
//     // let pokemons = useSelector((state) => state.pokemons)
//     let dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getAllPokemons())
//     }, [])
//     // console.log(pokemons)
    
//     return <div> 
//         <Paginado />
//     </div>
// }

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {getAllPokemons, getAllTypes} from '../../redux/actions'
import Paginado from "../PokemonPags/PokemonPags"
import pkballgif from '../../img/loadingDetail.gif'



export default function PokemonCards () {
    let [inicial, setInicial] = useState(null)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTypes())
        dispatch(getAllPokemons())
        .then((rpta) => {
            // console.log(rpta)
            setInicial(rpta.payload)
        })
        return () => {
            inicial = []
        }
    }, [])

    return <div>
        {

            inicial ? 
            
            <Paginado />

            :

            <div>
                <img src={pkballgif} />
            </div>

        }
    </div>
}