import {data} from '../data';
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import { addMovies, displayFavourites } from '../actions';
 

class App extends React.Component {

  
 
componentDidMount(){

   

   

  this.props.dispatch(addMovies(data));

}



 

 isMovieFavourite=(movie)=>{

  const {movies} =  this.props;
 
  const index  = movies.favourites.indexOf(movie);

  if(index !== -1){
       
      return true;
     
  }   
  return false; 
}
 

onChangeTab=(val)=>{

  this.props.dispatch(displayFavourites(val));
}

  // store.subscribe(()=>{ 

 
  //   console.log('updated');
  //   setRender(!rerender);
  // })
  // console.log(d);
 
 

 

  
  
render(){

  
  const { movies , search} = this.props;   // { movies: {}, search: {} }
  // console.log(movies);  
    const { list, favourites,  showFavourites } = movies; 
     console.log(movies);
    const displayItems = showFavourites ? favourites : list;
    console.log(displayItems);
    // console.log('Later state', this.props.store.getState());
 
  
    return  (<div className="App">

    <Navbar  dispatch={this.props.dispatch} search={search} />
    <div className="main">
     <div className="tabs">

       <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick={()=>{this.onChangeTab(false)}}>
             Movies</div>

             <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={()=>{this.onChangeTab(true)}}>
                 Favourites
             </div>
     </div>

     <div className="list">

       { displayItems.map((movie,index)=> (

         <MovieCard movie={movie} key={`movies-${index}`}  dispatch={this.props.dispatch}   isFavourite={this.isMovieFavourite(movie)} />

       ))}

       {
         favourites.length === 0 ? <div className='no-movies'> Nothing to display!</div> : ''
       }

     </div>

    </div>
 </div>)
   

          };
}


// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function cb(state){

  return{
    movies: state.movies,
    search: state.movies
  }
}

//only connected component get refreshed when any of the state changes.
const connectedAppComponent = connect(cb)(App);

export default connectedAppComponent;