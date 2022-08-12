import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_ATTACK = "SORT_BY_ATTACK";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const getAllPokemons = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/pokemons`)
        .then (respuesta => respuesta.json())
        .then (rpta => {return dispatch({type: GET_ALL_POKEMONS, payload:rpta })})
    };
};
export const searchPokemons = (search) => {
    return async function (dispatch) {
        return axios.get(`http://localhost:3001/api/pokemons?name=${search}`)
        // .then (respuesta => respuesta.json())
        .then (rpta => {return dispatch({type: SEARCH_POKEMON, payload:rpta})})
        .catch((error)=>{
            console.log(error)})
    }
};
export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        return fetch(`http://localhost:3001/api/pokemons/${id}`)
        .then (respuesta => respuesta.json())
        .then (rpta => {return dispatch({type: GET_POKEMON_DETAIL, payload:rpta })})
    };
};
export const sortByName = (orderName) => {
    return {
        type: SORT_BY_NAME,
        payload: orderName
    }
};
export const sortByAttack = (orderAttack) => {
    return {
        type: SORT_BY_ATTACK,
        payload: orderAttack
    }
};
export const filterByCreated = (filterCreated) => {
    return {
        type: FILTER_BY_CREATED,
        payload: filterCreated
    }
};
export const filterByType = (filterType) => {
    return {
        type: FILTER_BY_TYPE,
        payload: filterType
    }
};
export const getAllTypes = () => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/api/types`)
        .then (respuesta => respuesta.json())
        .then (rpta => {return dispatch({type: GET_ALL_TYPES, payload:rpta })})
    };
};
export function postPokemon(payload) {
	return axios.post("http://localhost:3001/api/pokemons", payload)
}

