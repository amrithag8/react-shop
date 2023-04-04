import Header from './Components/Header';
import Footer from './Components/Footer';
import Cartpage from './Pages/CartPage';
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import './App.scss';

function App() {
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
