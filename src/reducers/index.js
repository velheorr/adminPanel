const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'REMOVE_HERO':
            return {
                ...state, heroes: action.payload
            }
        case 'ADD_HERO':
            return {
                ...state, heroes: action.payload
            }
        case 'LOAD_FILTERS':
            return {
                ...state, filters: action.payload
            }
        default: return state
    }
}

export default reducer;