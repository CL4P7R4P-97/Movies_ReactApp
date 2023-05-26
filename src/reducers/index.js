//reducers functions will be pure functions

import { combineReducers } from "redux";

//default value of movie reducer will be an empty array when no argument or state is passed 
import { ADD_FAVOURITES, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, DISPLAY_FAVAOURITES, REMOVE_FROM_FAVAOURITES} from "../actions";

const initialMoviesState = {

    list: [], 
    favourites: [],
    showFavourites: false
}


export   function movies( state = initialMoviesState, action){

    switch (action.type) {
        case ADD_MOVIES:

              return{
                ...state,
                list: action.movies
              }
            
       

            case ADD_FAVOURITES:

            return{
              ...state,
              favourites: [action.movie, ...state.favourites]
            }
          
           case REMOVE_FROM_FAVAOURITES:

           const fileredArray = state.favourites.filter(
            movie => movie.Title !== action.movie.Title
           );

           return {
                 
            ...state,
            favourites: fileredArray
            
           }

           case DISPLAY_FAVAOURITES:

           

           return {
                 
            ...state,
            showFavourites: action.val
            
           }

           case ADD_MOVIE_TO_LIST:

           return {
            ...state,
            list: [action.movie, ...state.list]
           };
    
        default:
           return state;
    }
            
}

const initialSearch = {
  
result : {},
showSearchResults: false,

};

export function search( state = initialSearch, action){


  switch (action.type) {
    case ADD_SEARCH_RESULT:

          return{
            ...state,
            result: action.movie,
            showSearchResults: true
          }
        
          case ADD_MOVIE_TO_LIST:

          return {
           ...state,
           showSearchResults: false
          };

    default:
       return state;
}

}

// const initialRootState = {

//   movies: initialMoviesState,
//   search: initialSearch
// }

//we dont need below reducer; redux already provides thh combined reducer from redux library.

// export default function rootReducer( state = initialRootState, action){

//   return {

//     movies: movies(state.movies, action),
//     search: search(state.search, action)
//   }
// }


export default combineReducers({
    movies,
    search 
})