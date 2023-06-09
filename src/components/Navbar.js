 import React from 'react';
 import { connect } from 'react-redux';
import { addMovieToList, addMovies, handleMovieSearch } from '../actions';
 
 

class Navbar extends React.Component {

    
    constructor(props){

        super(props);
        this.state = {
            
            searchText: ''
        }
    }

    handleAddToMovies = (movie)=>{

        this.props.dispatch(addMovieToList(movie));
        
    }

    handleSearchClick = ()=>{


        const {searchText} = this.state;
        console.log(this.props);
        this.props.dispatch(handleMovieSearch(searchText));
    };

    handleSearchChange= (e) =>{

        this.setState({
            searchText: e.target.value
        })
    }

 render() {

  const { showSearchResults, result: movie } = this.props.search;
console.log(this.props.search);
    return (
        <div className="nav">
          <div className="search-container">
            <input onChange={this.handleSearchChange} />
            <button id="search-btn" onClick={this.handleSearchClick}>
              Search
            </button>
  
            {showSearchResults && (
              <div className="search-results">
                <div className="search-result">
                  <img src={movie.Poster} alt="search-pic" />
                  <div className="movie-info">
                    <span>{movie.Title}</span>
                    <button onClick={() => this.handleAddToMovies(movie)}>
                      Add to Movies
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
}


// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

// export default NavbarWrapper;

function cb({search}){

  return{
  search
  }
}

//only connected component get refreshed when any of the state changes.
const connectedNavbarComponent = connect(cb)(Navbar);
export default connectedNavbarComponent;