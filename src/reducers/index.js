//reducers functions will be pure functions

//default value of movie reducer will be an empty array when no argument or state is passed 
import { ADD_MOVIES } from "../actions";

const initialMoviesState = {

    list: [], 
    favourites: []
}


export default function movies( state = initialMoviesState, action){

    if(action.type === ADD_MOVIES){

        return  {
            ...state, 
            list: action.movies
        }
    }
            
}

