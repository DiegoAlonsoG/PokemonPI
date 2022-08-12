import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import PokemonCard from "../PokemonCard/PokemonCard"
import abierta from "../../img/abierta.png"
import cerrada from "../../img/cerrada.png"
import notFound from "../../img/404.webp"
import style from "./PokemonPags.module.css";
import { Link } from 'react-router-dom';



export default function Paginado() {
    const [local, setLocal] = useState(1)
    let paginas = useSelector((state) => state.renderPokemons)

    useEffect(() =>{
        setLocal(1)
    }, [paginas])
    function changeState (e) {
        setLocal(Number(e.target.id))
    }

    let pagInicial = [];
    let elementosPorPag = 12
    for (let i=1; i <= Math.ceil(paginas.length/elementosPorPag); i++) {
        pagInicial.push(i)
    }
    // console.log(pagInicial)
    const finSlice = elementosPorPag*local 
    // 12*1 = 12 cuando local es 1
    // 12*2 = 24 cuando local es 2
    // 12*3 = 36
    const inicioSlice = finSlice - elementosPorPag 
    // 12-12 = 0 cuando local es 1
    // 24-12 = 12 cuando local es 2
    // 36-12 = 24
    const pkmPorPagina = paginas.slice(inicioSlice,finSlice)
    // console.log(pkmPorPagina)
    
    const itemsPaginado = pagInicial.map((elem) => {
        return <li
        className={style.pagina}
        key={elem}
        id={elem} 
        onClick={changeState} 
        >
            {/* {elem} */}
            <img
            className={style.imagen}
            id={elem}
            src={local === elem ? abierta : cerrada}
            alt="what?"
            >
            </img>
        </li>
    })
    
    function loadAgain(){
		window.location.reload()
	}

    return <div className={style.container}>

        {
        
        !paginas.length ?
        <div>
            <img src={notFound} className={style.notFound} onClick={()=>loadAgain()}  alt='notfound'/>
        </div>
            :

        <div className={style.secondary}>
        <ul className={style.paginasIzq}>
        {itemsPaginado}
        </ul>

        <div className={style.allCards}>
        {pkmPorPagina.map((pkm) => {
            return (
                <PokemonCard
                key={pkm.id}
                name={pkm.name}
                imageRegular={pkm.imageRegular}
                imageShiny={pkm.imageShiny}
                types={pkm.types}
                id={pkm.id}
                />
        )})}
        </div>

        <ul className={style.paginasDer}>
        {itemsPaginado}
        </ul>
        </div>
        }

    </div>
}
