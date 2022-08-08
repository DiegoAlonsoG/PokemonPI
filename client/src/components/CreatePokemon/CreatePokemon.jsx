import React from 'react';
import { NavLink } from 'react-router-dom';
import FormCreate from '../FormCreate/FormCreate';
// import FormPreview from '../FormPreview/FormPreview';
import style from './CreatePokemon.module.css'
import botNav from "../../img/pkball.png"
import topNav from "../../img/mainlogo.png"

// test2

export default function Nav () {
    return <div className={style.container}> 

    <div className={style.nav}>

        <img className={style.topImg} src={topNav} alt='notfound'/>

        <NavLink exact to="/" >
            <button className={style.botonRegresar}>Return to main</button>
        </NavLink> 

        <NavLink exact to="/home" >
            <button className={style.botonHome}>Home</button>
        </NavLink>

        <img className={style.botImg} src={botNav} alt='notfound' />

    </div>

        <div className={style.theForm}>
        <FormCreate />
        </div>
        
        </div>
}