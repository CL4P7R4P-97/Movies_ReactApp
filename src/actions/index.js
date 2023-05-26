//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FROM_FAVAOURITES=  'REMOVE_FROM_FAVAOURITES';
export const DISPLAY_FAVAOURITES=  'DISPLAY_FAVAOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST  = 'ADD_MOVIE_TO_LIST';

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

export function addMovieToList(movie) {
    return {
      type: ADD_MOVIE_TO_LIST,
      movie,
    };
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


export function handleMovieSearch(movie){


    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

return function(dispatch) {
    fetch(url).
    then(response=>response.json())
.then(movie=>{
    console.log(movie);
     //dispatch action to add movies to the reducer
     dispatch(addMovieSearch(movie));
})}

   

}

export   function addMovieSearch(movie){

    return {

        type: ADD_SEARCH_RESULT,
        movie
    };
}