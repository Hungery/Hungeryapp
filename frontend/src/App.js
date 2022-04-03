import Paanakyma from './Paanakyma';
import Kirjautumisnakyma from './Kirjautumisnakyma'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
//import restaurants from './data.json'
import RavintolaIDnakyma from './RavintolaIDnakyma'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import {useEffect, useState} from 'react'




const App = () =>{

  const [ravintolat, setRavintolat] = useState([]);
  
  useEffect(() =>{
    const getRavintolat = async () => {
      const raflat = await axios.get('http://localhost:8080/ravintolat')

      setRavintolat(raflat.data);
      console.log(raflat.data);

    }

      getRavintolat();

   }, []);
console.log(ravintolat);
 /*const ravintolat = ravintolat1.map(ravintola => {
    return { ...ravintola, id: uuidv4() }
    
  })*/

return(
  <BrowserRouter>
  <div>
    
    <Routes> 
      <Route path="/" element = { <Kirjautumisnakyma/> } />
      <Route path="/Paanakyma" element = { <Paanakyma ravintolat = {ravintolat}/> } />
      <Route path="/Paanakyma/:nimi" element = { <RavintolaIDnakyma ravintolat = {ravintolat}/> } />
    </Routes>
  </div>
  </BrowserRouter>
)
}
export default App

/*     
    
    <Kayttajanluonti/>
    <Ravontilanadmin/>
    <Tilauksenloppu/>
    */