import Header from './Components/Header';
import Footer from './Components/Footer';
import Cartpage from './Pages/CartPage';
import Main from './Components/Main';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import './App.scss';
import { useEffect, useReducer, createContext } from 'react';
import { initialState, reducer } from './Contexts/AppReducer';

export const AppContext=createContext();

function App() {
const[state, dispatch]=useReducer(reducer, initialState);

console.log("product is", state);


  async function getProductdata()
  {   const response=await fetch("https://cors-anywhere.herokuapp.com/https://amrithag8.github.io/api-test/productdata.json");
      const data=await response.json();
      return data.products;
      
      }

      useEffect(()=>{
        getProductdata().then(function(data){
          dispatch({type: "PRODUCTS_LOADED",
           payload: data})
        })
      }, [])



  return (
    <AppContext.Provider value={{state}}>
    <div className="App">
      <div className="appWrapper">
      <Header/>
      <Main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
      </Routes>
      </Main>
      
      <Footer/>
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
