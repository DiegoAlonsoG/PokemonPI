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
        // const rpta = await axios.get(`/api/pokemons`)
        // return dispatch({type: GET_ALL_POKEMONS, payload:rpta.data }) 
        const respuesta = await axios.get(`/api/pokemons`)
        // .then (respuesta => respuesta.json())
        return dispatch({type: GET_ALL_POKEMONS, payload:respuesta.data})
        // .then (rpta => {return dispatch({type: GET_ALL_POKEMONS, payload:rpta })})
        // .catch((error)=>{
        //     console.log(error)})
    };
};
export const searchPokemons = (search) => {
    return async function (dispatch) {
        const respuesta = await axios.get(`/api/pokemons?name=${search}`)
        // .then (respuesta => respuesta.json())
        return dispatch({type: SEARCH_POKEMON, payload:respuesta.data})
    }
};
export const getPokemonDetail = (id) => {
    return async (dispatch) => {
        const respuesta = await axios.get(`/api/pokemons/${id}`)
        // .then (respuesta => respuesta.json())
        return dispatch({type: GET_POKEMON_DETAIL, payload:respuesta.data })
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
        const respuesta = await axios.get(`/api/types`)
        // .then (respuesta => respuesta.json())
        return dispatch({type: GET_ALL_TYPES, payload:respuesta.data })   
    };
};
export async function postPokemon(payload) {
	const xxx = await axios.post("/api/pokemons", payload)
}

