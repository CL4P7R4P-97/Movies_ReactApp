import {data} from '../data';
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { addMovies, displayFavourites } from '../actions';


class App extends React.Component {

  
 
componentDidMount(){

  const { store } = this.props;

  store.subscribe(()=>{

    console.log('updated');
    this.forceUpdate();
  })

  store.dispatch(addMovies(data));

}



 

 isMovieFavourite=(movie)=>{

  const {favourites} =  this.props.store.getState();
 
  const index  = favourites.indexOf(movie);

  if(index !== -1){
      console.log('found movie');
       this.props.store.subscribe(()=>{
          
        })
      return true;
     
  }   
  return false; 
}
 

onChangeTab=(val)=>{

  this.props.store.dispatch(displayFavourites(val));
}

  // store.subscribe(()=>{ 

 
  //   console.log('updated');
  //   setRender(!rerender);
  // })
  // console.log(d);
 
 

 

  
  
render(){
    
    const { list, favourites,  showFavourites } = this.props.store.getState();
     
    const displayItems = showFavourites == false ? list : favourites;
    console.log(displayItems);
    console.log('Later state', this.props.store.getState());
 
   return  (<div className="App">

       <Navbar/>
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

            <MovieCard movie={movie} key={`movies-${index}`}  dispatch={this.props.store.dispatch}   isFavourite={this.isMovieFavourite(movie)} />

          ))}

          {
            favourites.length === 0 ? <div> Nothing to display!</div> : ''
          }

        </div>

       </div>
    </div>)

          };
}

export default App;
