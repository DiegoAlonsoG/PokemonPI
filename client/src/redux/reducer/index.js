import { GET_ALL_POKEMONS, SEARCH_POKEMON, GET_POKEMON_DETAIL, SORT_BY_NAME, SORT_BY_ATTACK, FILTER_BY_CREATED, FILTER_BY_TYPE, GET_ALL_TYPES } from '../actions'
import { ASCENDENTE, MAYOR, UNSORTED } from '../../constants/sort';
import { ALL, API, DB} from '../../constants/filter'

const initialState = {
    pokemons: [],
    renderPokemons: [],
    // filteredCreatedOnce: [],
    // filteredCreatedTwice: [],
    // createdMarkerCreated: [],
    // createdMarkerTypes: [],
    // filteredTypesOnce: [],
    // filteredTypesTwice: [],
    // typesMarkerCreated: [],
    // typesMarketTypes: [],
    markerCreate: [],
    markerType: [],
    notFoundType: [],
    allTypes: ['off'],
    allCreate: ['off'],
    types: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS: 
            return {
                ...state,
                pokemons: action.payload,
                renderPokemons: action.payload
            };
        case SEARCH_POKEMON: 
            return {
                ...state,
                renderPokemons: action.payload.data 
            };
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                // pokemonDetail: action.payload
            };
        case SORT_BY_NAME:
            if (action.payload === UNSORTED) {
                return {
                    ...state,
                }
            } else {
                let pkmNameOrder = [...state.renderPokemons]
                pkmNameOrder = pkmNameOrder.sort((a, b) => {
                    if (a.name < b.name) {
                        return action.payload === ASCENDENTE ? -1 : 1;
                    }
                    if (a.name > b.name) {
                        return action.payload === ASCENDENTE ? 1 : -1;
                    }
                    return 0
                })
                return {
                    ...state,
                    renderPokemons: pkmNameOrder
                }
            };
        case SORT_BY_ATTACK:
            if (action.payload === UNSORTED) {
                return {
                    ...state,
                }
            } else {
                let pkmNameAttack = [...state.renderPokemons]
                pkmNameAttack = pkmNameAttack.sort((a, b) => {
                    if (a.attack < b.attack) {
                        return action.payload === MAYOR ? -1 : 1;
                    }
                    if (a.attack > b.attack) {
                        return action.payload === MAYOR ? 1 : -1;
                    }
                    return 0
                })
                return {
                    ...state,
                    renderPokemons: pkmNameAttack
                }
            };
        case FILTER_BY_CREATED:
            let pkmFilterCreated = [...state.pokemons]
            if (!state.markerType.length) {
                if (action.payload === ALL) {
                    return {
                        ...state,
                        renderPokemons: state.pokemons,
                        allCreate: ['on']
                    }
                }
                if (action.payload === API) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === false
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                } 
                if (action.payload === DB) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === true
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                }
            }
            if (state.markerType[0] === 'not found') {
                let pkmFilterCreated = [...state.notFoundType]
                if (action.payload === ALL && state.allTypes[0] === 'on') {
                    return {
                        ...state,
                        renderPokemons: state.pokemons,
                        allCreate: ['on']
                    }
                }
                if (action.payload === ALL && state.allTypes[0] !== 'on') {
                    return {
                        ...state,
                        renderPokemons: state.notFoundType,
                        allCreate: ['on']
                    }
                }
                if (action.payload === API) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === false
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                } 
                if (action.payload === DB) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === true
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                }
            } else {
                let pkmFilterCreated = [...state.markerType]
                if (action.payload === ALL && state.allTypes[0] === 'on') {
                    return {
                        ...state,
                        renderPokemons: state.pokemons,
                        allCreate: ['on']
                    }
                }
                if (action.payload === ALL && state.allTypes[0] === 'on') {
                    return {
                        ...state,
                        renderPokemons: state.markerType,
                        allCreate: ['on']
                    }
                }
                if (action.payload === API) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === false
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                } 
                if (action.payload === DB) {
                    pkmFilterCreated = pkmFilterCreated.filter((pkm) => 
                    pkm.created === true
                    )
                    return {
                        ...state,
                        renderPokemons: pkmFilterCreated,
                        markerCreate: pkmFilterCreated,
                    }
                }
            };
        case FILTER_BY_TYPE:
            if (!state.markerCreate.length) {
                if (action.payload === ALL) {
                    return {
                        ...state,
                        renderPokemons: state.pokemons,
                        allTypes: ['on']
                    }
                } else {
                    let pkmFilterType = state.pokemons.filter((k) => k.types.includes(action.payload))
                    return {
                        ...state,
                        renderPokemons: pkmFilterType,
                        markerType: pkmFilterType,
                    }
                }
            } else {
                if (action.payload === ALL && state.allCreate[0] === 'on') {
                    return {
                        ...state,
                        renderPokemons: state.pokemons,
                        allTypes: ['on']
                    }
                }
                if (action.payload === ALL && state.allCreate[0] !== 'on') {
                    return {
                        ...state,
                        renderPokemons: state.markerCreate,
                        allTypes: ['on']
                    }
                } else {
                    let pkmFilterType = state.markerCreate.filter((k) => k.types.includes(action.payload))
                    return {
                        ...state,
                        renderPokemons: pkmFilterType,
                        // markerType: pkmFilterType,
                        markerType: ['not found'],
                        notFoundType: state.pokemons.filter((k) => k.types.includes(action.payload))
                    }
                }
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            };
        default:
        return state
    };
};

export default rootReducer;