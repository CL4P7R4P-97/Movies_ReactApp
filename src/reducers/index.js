//reducers functions will be pure functions

//default value of movie reducer will be an empty array when no argument or state is passed 
import { ADD_FAVOURITES, ADD_MOVIES, DISPLAY_FAVAOURITES, REMOVE_FROM_FAVAOURITES } from "../actions";

const initialMoviesState = {

    list: [], 
    favourites: [],
    showFavourites: false
}


export default function movies( state = initialMoviesState, action){

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
    
        default:
           return state;
    }
            
}

