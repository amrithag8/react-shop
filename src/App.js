import Header from './Components/Header';
import Footer from './Components/Footer';
import Cartpage from './Pages/CartPage';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import './App.scss';
import { useEffect, useReducer, createContext } from 'react';
import { initialState, reducer } from './Contexts/AppReducer';

function App() {
const[state, dispatch]=useReducer(reducer, initialState)

  async function getProductdata()
  {   const response=await fetch("https://amrithag8.github.io/api-test/productdata.json");
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
    <div className="App">
      <div class="appWrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
      </Routes>
      
      <Footer/>
      </div>
    </div>
  );
}

export default App;
