import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Menu from './components/Menu'
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import React, {useState, useEffect, Fragment, } from "react";
import axios from "axios";


const App = () => {
  
/*
  const [ menus, setMenus ] = useState([]);

  useEffect(() =>{
    const getMenus = async () => {
      const menus = await axios.get('http://localhost:8080/menus')

      setMenus(menus.data);
    }

      getMenus(menus);

   }, []);
   */

  return(
    
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <div className="row">
        <Routes > 
          <Route path="/menuravintola" element = 
            {<Menunakyma />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/ostoskori" element = 
            { <Ostoskori /> } />
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
/*

<Route path="/menuravintola" element = 
{<><Menu menus={menus} /><Menunakyma/></>} />
</Routes>

*/

