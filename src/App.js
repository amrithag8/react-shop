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




  async function getProductdata()
  {   const response=await fetch("https://my-json-server.typicode.com/amrithag8/api-test/products");
      const data=await response.json();
      return data;
      
      }

      useEffect(()=>{
        getProductdata().then(function(data){
          dispatch({type: "PRODUCTS_LOADED",
           payload: data})
        })
      }, [])


      console.log("product is", state);


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
