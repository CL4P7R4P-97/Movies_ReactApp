import {data} from '../data';
 
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { addMovies } from '../actions';


function App(props) {


const store = props.store;
const [rerender, setRender] = useState(false);



  useEffect(()=>{


   const d =  store.subscribe(()=>{ 

 
      console.log('updated');
      setRender(!rerender);
    })
    // console.log(d);
   

    store.dispatch(addMovies(data));
    
  },[ ])

  console.log('later state' , store.getState());

  const { list } = store.getState();
  
  return (
    
 
    <div className="App">

       <Navbar/>
       <div className="main">
        <div className="tabs">

          <div className="tab">
                Movies</div>
                <div className="tab">
                    Favourites
                </div>
        </div>

        <div className="list">

          { list.map((movie,index)=> (

            <MovieCard movie={movie} key={`movies-${index}`}/>

          ))}

        </div>

       </div>
    </div>

  );
}

export default App;
