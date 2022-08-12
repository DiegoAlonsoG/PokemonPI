import { useState } from 'react'
import style from './PokemonCard.module.css'
import {BsStars} from 'react-icons/bs'
import {MdRestartAlt} from 'react-icons/md'
import { Link } from 'react-router-dom';


export default function PokemonCard ({id, name, imageRegular, imageShiny, types}) {

    const [shiny, setShiny] = useState(false)

    function onClickChange () {
        if (shiny) {
            return setShiny(false)
        }
        setShiny(true)
    }

    return <div className={style.container}>

        <div className={style.button} onClick={onClickChange}>
            {
                shiny ? 
                <MdRestartAlt className={style.icon}/> :
                <BsStars className={style.icon}/>
            }
            </div>
            <Link to={`/pokemon/${id}`}>
        <div className={style.fondo}>
            { shiny ?
            <img className={style.imagenFondo} src={imageShiny} alt="la imagen aquí"/> :
            <img className={style.imagenFondo} src={imageRegular} alt="la imagen aquí"/>

            }
        </div>

        <div className={style.detalles}>
            <h1 className={style.nameCard}>{name}</h1>
            {
            shiny ?
            <img className={style.imagen} src={imageShiny} alt="la imagen aquí"/> :
            <img className={style.imagen} src={imageRegular} alt="la imagen aquí"/>
            }

            <div className={style.types}>
                {types.map((hey) => {
                    if (hey === "bug") {
                        return (
                            <h4 className={style.bug}>{hey}</h4>
                        )                
                    }
                    if (hey === "dark") {
                        return (
                            <h4 className={style.dark}>{hey}</h4>
                        )                
                    }
                    if (hey === "dragon") {
                        return (
                            <h4 className={style.dragon}>{hey}</h4>
                        )                
                    }
                    if (hey === "electric") {
                        return (
                            <h4 className={style.electric}>{hey}</h4>
                        )                
                    }
                    if (hey === "fairy") {
                        return (
                            <h4 className={style.fairy}>{hey}</h4>
                        )                
                    }
                    if (hey === "fighting") {
                        return (
                            <h4 className={style.fighting}>{hey}</h4>
                        )                
                    }
                    if (hey === "fire") {
                        return (
                            <h4 className={style.fire}>{hey}</h4>
                        )                
                    }
                    if (hey === "flying") {
                        return (
                            <h4 className={style.flying}>{hey}</h4>
                        )                
                    }
                    if (hey === "ghost") {
                        return (
                            <h4 className={style.ghost}>{hey}</h4>
                        )                
                    }
                    if (hey === "grass") {
                        return (
                            <h4 className={style.grass}>{hey}</h4>
                        )                
                    }
                    if (hey === "ground") {
                        return (
                            <h4 className={style.ground}>{hey}</h4>
                        )                
                    }
                    if (hey === "ice") {
                        return (
                            <h4 className={style.ice}>{hey}</h4>
                        )                
                    }
                    if (hey === "normal") {
                        return (
                            <h4 className={style.normal}>{hey}</h4>
                        )                
                    }
                    if (hey === "poison") {
                        return (
                            <h4 className={style.poison}>{hey}</h4>
                        )                
                    }
                    if (hey === "psychic") {
                        return (
                            <h4 className={style.psychic}>{hey}</h4>
                        )                
                    }
                    if (hey === "rock") {
                        return (
                            <h4 className={style.rock}>{hey}</h4>
                        )                
                    }
                    if (hey === "shadow") {
                        return (
                            <h4 className={style.shadow}>{hey}</h4>
                        )                
                    }
                    if (hey === "steel") {
                        return (
                            <h4 className={style.steel}>{hey}</h4>
                        )                
                    }
                    if (hey === "unknown") {
                        return (
                            <h4 className={style.unknown}>{hey}</h4>
                        )                
                    }
                    if (hey === "water") {
                        return (
                            <h4 className={style.water}>{hey}</h4>
                        )                
                    }
                    return <h4 className={style.typeCard}>{hey}</h4>
                })}
            </div>
        </div>
        </Link>

    </div>
}
