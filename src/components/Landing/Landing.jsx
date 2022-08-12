import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Landing.module.css'
import logo from "../../img/mainlogo.png"
import github from "../../img/logoGitHub.png"
import lkin from "../../img/logoLinkedIn.png"


export default function Nav () {
    return <div className={style.container}>
        <div className={style.texto}>
        <div>
            <h1>PROYECTO INDIVIDUAL</h1>
            <h1>Full Stack - Henry</h1>
            <h2>Pokemon Api</h2>
        </div>
        <div className={style.textoSecun}>
            <h2>Diego Alonso Gutierrez</h2>
            <h4>Cohorte 26c</h4>
        </div>
        </div>
        <div className={style.botones}> 
            <NavLink exact to="/home" >
                <button className={style.toHome}>Home</button>
            </NavLink> 
        {/* <a className={style.lkin} href="https://www.linkedin.com/in/diegoalonsogm/">
            <img src={lkin}/>
        </a>

        <a className={style.github} href="https://github.com/DiegoAlonsoG">
            <img src={github}/>
        </a> */}
        <img className={style.logo} src={logo}/>
        </div>
    </div> 
}