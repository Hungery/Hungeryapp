import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import './App.css';
import React from 'react'
import Menu from './components/Menu'
import alepa from './components/Alepa_Tripla.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Paanakyma from './components/Paanakyma';
import Ostoskori from './components/Ostoskori';

function App() {

  const [ menus, setMenus ] = useState([]);

  useEffect(() =>{
    const getMenus = async () => {
      const menus = await axios.get('http://localhost:8080/menus')

      setMenus(menus.data);
    }

      getMenus();

   }, []);

/*
  const handleItemCheckedToggle = (item) => {
      let newTuotteet = [...tuotteet];
      let itemClickedIndex = newTuotteet.findIndex(i => item.title == i.title);

      if(itemClickedIndex != -1) {
          let newElement = {...newTuotteet[itemClickedIndex]}
          newElement.qty = newElement.qty+1;
          newTuotteet[itemClickedIndex] = newElement;
          setTuotteet(newTuotteet);
      }
  }
*/
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/paanakyma" element={ <Paanakyma/> }/>
        <Route path="/ostoskori" element={ <Ostoskori/> }/>
      </Routes> 

    <div className="App">
      
      <div className='yläpalkki'>
        <Link to="/paanakyma"><button className='edellinenbtn'>edellinen</button></Link>
        <div className='header'>HUNGERY</div>
        <Link to="/ostoskori"><button className='ruokakoribtn'>ostoskori</button></Link>
      </div>

        <div>
        <Menu menus={ menus } /*itemClickedEvent={ handleItemCheckedToggle }*/ />
        </div>
      
    </div>

    </BrowserRouter>
  );
}

export default App;
