import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import  thunk from 'redux-thunk'

import './index.css';
import App from './components/App';
 
import rootReducer from './reducers/index';


//normal object{dispatch, getState} !not a store object
// logger(obj)(next)(action)
// const logger = function ({dispatch, getState}){


//   return function(next){
//     return function(action)
//     {
//       console.log('ACTION_TYPE =',action.type);
//       next(action);
//     }
//   }

// }

const logger  = ({dispatch, getState}) =>(next) =>(action)=> {
  
  if(typeof action !== 'function'){
    console.log('ACTION',action);
  }
  next(action)} ;


// const thunk = ({dispatch, getState}) =>(next) =>(action)=>{

//   if(typeof action === 'function'){
//     action(dispatch);
//     return
//   }

//   next(action);
// }

//below will call the movies reducer
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);



//creating store context to prevent heirarchical passing of props.

// export const StoreContext = createContext();

// console.log(StoreContext);// having provider and consumer thus, we can use consumer to access attributes of providers.


// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }



// console.log('Before', store.getState());

// store.dispatch({

//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log('After', store.getState());

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         //just to subscribe to store we are wrapping it with wrapper
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
   
    <App   />
  
 </Provider>
 </React.StrictMode>
);
 
