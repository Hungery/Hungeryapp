import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import React, {useState, useEffect} from "react";

const App = (props) => {
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (menu) => {
    const exist = cartItems.find(x => x.id === menu.id)
    if(exist) {
      setCartItems(
        cartItems.map(x => 
          x === menu.id ? {...exist, qty: exist.qty +1} : x
          )
      );
    } else {
      setCartItems([...cartItems, {...menu, qty: 1 }]);
    }
  };
  
  return(
  <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div className="row">
        <Routes> 
          <Route path="/menuravintola" element = { <Menunakyma>onAdd={onAdd}</Menunakyma> } />
        </Routes>
        <Ostoskori onAdd={onAdd} cartItems={cartItems}></Ostoskori>
      </div>
      <div>
        <Routes>
          <Route path="/ostoskori" element = { <Ostoskori /> } />
        </Routes>
      </div>
  </div>
  </BrowserRouter>
  )}

export default App

/*
const App = () =>(
  <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div className="row">
        <Routes> 
          <Route path="/menuravintola" element = { <Menunakyma /> } />
        </Routes>
        <Ostoskori />
      </div>
      <div>
        <Routes>
          <Route path="/ostoskori" element = { <Ostoskori /> } />
        </Routes>
      </div>
  </div>
  </BrowserRouter>
)
*/