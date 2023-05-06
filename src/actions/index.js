//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVAOURITES=  'REMOVE_FROM_FAVAOURITES';
export const DISPLAY_FAVAOURITES=  'DISPLAY_FAVAOURITES';
//action creators
export function addMovies(movies){

    return {
        type: ADD_MOVIES,
        movies
    }
}


export function addFavourites(movie){

    return {
        type: ADD_FAVOURITES,
        movie
    }
}



export function removeFromFavourites(movie){

    return {
        type: REMOVE_FROM_FAVAOURITES,
        movie
    }
}

export function displayFavourites(val){

    return {
        type: DISPLAY_FAVAOURITES,
        val
    }
}


