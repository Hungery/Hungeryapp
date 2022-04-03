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

  const [ravintolat1, setRavintolat] = useState([]);
  
  useEffect(() =>{
    const getRavintolat = async () => {
      const raflat = await axios.get('https://dummyjson.com/products')

      setRavintolat(raflat.data.products);
      console.log(raflat.data.products);

    }

      getRavintolat();

   }, []);


  const ravintolat = ravintolat1.map(ravintola => {
    return { ...ravintola, idd: uuidv4() }
  })

return(
  <BrowserRouter>
  <div>
    
    <Routes> 
      <Route path="/" element = { <Kirjautumisnakyma/> } />
      <Route path="/Paanakyma" element = { <Paanakyma ravintolat = {ravintolat}/> } />
      <Route path="/Paanakyma/:idd" element = { <RavintolaIDnakyma ravintolat = {ravintolat}/> } />
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