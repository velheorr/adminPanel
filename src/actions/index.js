export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const removeHero = (heroes)=> {
    return {
        type: 'REMOVE_HERO',
        payload: heroes
    }
}

export const addHero = (hero)=> {
    return {
        type: 'REMOVE_HERO',
        payload: hero
    }
}