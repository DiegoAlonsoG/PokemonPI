import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
// import PokemonCard from '../PokemonCard/PokemonCard'
import Nav from '../Nav/Nav'
import style from './Home.module.css'
import pkballgif from '../../img/loadingDetail.gif'
import {getAllPokemons, getAllTypes} from '../../redux/actions'
import PokemonPags from '../PokemonPags/PokemonPags'


export default function Home() {

  let [home, setHome] = useState(null)
  let dispatch = useDispatch()
  useEffect(() => {
      dispatch(getAllTypes())
      dispatch(getAllPokemons())
      .then((rpta) => {
          // console.log(rpta)
          setHome(rpta.payload)
      })
      return () => {
          home = []
      }
  }, [])

  return <div>
  <div>
      <Nav></Nav>
    </div>
  {

    home ?

    <div className={style.container}>

    

    <div>
      {/* <PokemonCard></PokemonCard> */}
      <PokemonPags></PokemonPags>
    </div>

    </div>

    :

    <div className={style.loading}>
      <img className={style.loadGif} src={pkballgif} />
      <div className={style.loadText}>Loading...</div>
    </div>

  }


  </div>
}
