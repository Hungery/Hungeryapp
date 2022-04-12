import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import axios from "axios";
import React, {useState, useEffect, Fragment, } from "react";


const App = (props) => {
  
  const {cartItems, onAdd} = props;

  const pay = (maksu) => {
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

    let tilaaja = " ";
    let tuotteet = " ";

     for(let i = 0; i < cartItems.length; i++) {
       let summa = {...Ostoskori[i]}
       tilaaja = tilaaja + ", " +summa.nimi +" qty: " + summa.qty + " ";
       tuotteet += summa.qty
     }
  }


  return(
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div className="row">
        <Routes> 
          <Route path="/menuravintola" element = 
          { <Menunakyma /> } />
        </Routes>
      </div>
      <div>
        <Routes>
        </Routes>
      </div>
  </div>
  </BrowserRouter>
)
};

export default App

//<Route path="/menuravintola" element = { <Menunakyma>onAdd={onAdd}</Menunakyma> } />
//{ <Ostoskori onAdd= {onAdd} cartItems={cartItems}/>}
//<Route path="/ostoskori" element = { <Ostoskori /> } />

//<Route path="/menuravintola" element = 
//{ <Menunakyma /> } />

/*<Route path='/menuravintola'
element={
  <Fragment>
      < Menunakyma />
      < Ostoskori />
  </Fragment>
}
/>
*/

