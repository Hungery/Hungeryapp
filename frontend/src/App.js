import { BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import './App.css';
import React from 'react'
import Menu from './components/Menu'
import alepa from './components/Alepa_Tripla.jpg';
import { useState, useEffect } from 'react';
import Paanakyma from './components/Paanakyma';
import Ostoskori from './components/Ostoskori';

function App() {

  const [ tuotteet, setTuotteet ] = useState([
      {
          id: 1,
          title: "Kaljaa",
          description: "Vehnäistä kaljaa tölkistä",
          price: 2.90,
          thumbnail: false,
          isChecked: false,
          qty: 0,
      },
      {
          id: 2,
          title: "Sipsii",
          description: "Estrella grilli sipsi",
          price: 4.90,
          thumbnail: false,
          isChecked: false,
          qty: 0,
      },
  ]);

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

  return (
    <BrowserRouter>
    <div className="App">
      
      <div className='yläpalkki'>
        <Link to="/paanakyma"><button className='edellinenbtn'>edellinen</button></Link>
        <div className='header'>HUNGERY</div>
        <Link to="/ostoskori"><button className='ruokakoribtn'>ostoskori</button></Link>
      </div>

      <div className='alapalkki'>
        <div className='ravintolannimi'>RAVINTOLAN NIMI</div>
        <div className='kuva'>
            <img src={alepa} alt="RAVINTOLAN KUVA" width="550" height="400"/>
        </div>
        <div className='menu'>
        <Menu tuotteet={ tuotteet } itemClickedEvent={ handleItemCheckedToggle }/>
        </div>
      </div>
      <Routes>
        <Route path="/paanakyma" element={ <Paanakyma/> }/>
        <Route path="/ostoskori" element={ <Ostoskori/> }/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
