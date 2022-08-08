import React, { useState } from 'react'
import { useEffect } from "react"
import { NavLink, useParams } from 'react-router-dom';
import pkballgif from '../../img/loadingDetail.gif'
import { useDispatch } from 'react-redux';
import { getPokemonDetail } from '../../redux/actions';
import style from './PokemonDetail.module.css';
import botNav from "../../img/pkball.png"
import topNav from "../../img/mainlogo.png"


export default function PokemonDetail () {
    let [detalle, setDetalle] = useState(null)
    let {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemonDetail(id))
        .then((rpta) => {
            setDetalle(rpta.payload)
        })
        return () => {
            detalle = null
        }
    },[])
    return (
        <div className={style.mainComponent}>
            <div className={style.containerNav}> 
                    <img className={style.topImg} src={topNav} alt='notfound'/>

            <NavLink to="/home" >
                <button className={style.boton}>
                    Return Home
                </button>
                </NavLink>
                <img className={style.botImg} src={botNav} alt='notfound'/>

                </div>
            {

                detalle ?

                <div className={style.main}>
                    <img className={style.imageBackOne} src={detalle.image} alt="la imagen aquí"/>
            <div className={style.container}>
                <h2 className={style.nameDetail}>{detalle.name}</h2>
                <img className={style.image} src={detalle.image} alt="la imagen aquí"/>
                <div className={style.types}>
                    <div className={style.labelTypes}>
                    Types: 
                    </div>
                    <div className={style.losTipos}>
                    {detalle.types?.map((hey) => {
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
                    


                <div className={style.stat}> <label className={style.label}>
                    Created By: </label>
                    
                    <div className={style.statValue}>
                    {detalle.createdBy}</div>
                </div>


                <div className={style.stat}> <label className={style.label}>
                    Life: </label>
                    
                    <div className={style.statValue}>
                    {detalle.life}</div>
                </div>
                
                <div className={style.stat}> <label className={style.label}>
                    Attack: </label>
                    
                    <div className={style.statValue}>
                    {detalle.attack}</div>
                </div>
                
                <div className={style.stat}> <label className={style.label}>
                    Defense: </label>
                    
                    <div className={style.statValue}>
                    {detalle.defense}</div>
                </div>
                
                <div className={style.stat}> <label className={style.label}>
                    Speed: </label>
                    
                    <div className={style.statValue}>
                    {detalle.speed}</div>
                </div>
                
                <div className={style.stat}> <label className={style.label}>
                    Height: </label>
                    
                    <div className={style.statValue}>
                    {detalle.height} in / {(detalle.height*2.54).toFixed(2)} cm </div>
                </div>
                
                <div className={style.stat}> <label className={style.label}>
                    Weight: </label>
                    
                    <div className={style.statValue}>
                    {detalle.weight} lb / {(detalle.weight*0.454).toFixed(2)} kg </div>
                </div>
                
            </div> 
            
            <img className={style.imageBackTwo} src={detalle.image} alt="la imagen aquí"/>
            </div>
            
            :

            <div className={style.loading}>
                <img className={style.loadGif} src={pkballgif} alt='notfound'/>
                <div className={style.loadText}>Loading...</div>
            </div>
            }
        </div>
    )
}