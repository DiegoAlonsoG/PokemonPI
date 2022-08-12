import React from 'react';
import { NavLink } from 'react-router-dom';
import OrderByName from '../OrderByName/OrderByName';
import OrderByAttack from '../OrderByAttack/OrderByAttack';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import FilterByCreated from '../FilterByCreated/FilterByCreated';
import FilterByType from '../FilterByType/FilterByType';
import { useDispatch } from 'react-redux';
// import { getAllPokemons } from '../../redux/actions';
import style from "./Nav.module.css"
import botNav from "../../img/pkball.png"
import topNav from "../../img/mainlogo.png"

export default function Nav () {
    // const dispatch = useDispatch()
    // function onSelectReset() {
    //     dispatch(getAllPokemons())
    // }
    function loadAgain(){
		window.location.reload()
	}
    return <div className={style.container}>  
        <img className={style.topImg} src={topNav} alt='notfound'/>
        <NavLink exact to="/" >
            <button className={style.botonRegresar}>Return to main</button>
        </NavLink> 

        <div>
        <NavLink exact to="/create" >
        <button className={style.botonCrear}>Create Pokemon</button>
        </NavLink>
        </div>

        <div className={style.etiqueta}> 
            <label className={style.label}>Filter by:</label>
            <div className={style.bySomething}>
            <FilterByCreated />
            </div>
            <div className={style.bySomething}>
            <FilterByType />
            </div>
        </div>

        <div className={style.etiqueta}>
            <label className={style.label}>Order by:</label>
            <div className={style.bySomething}>
            <OrderByName />
            </div>
            <div className={style.bySomething}>
            <OrderByAttack />
            </div>
        </div>

        <div>
        <button className={style.botonResetear} onClick={()=>loadAgain()}>Reset selectors</button>
        </div>

        <SearchPokemon />
        <img className={style.botImg} src={botNav} alt='notfound'/>
    </div>
}