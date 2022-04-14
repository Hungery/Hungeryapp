import Paanakyma from './Paanakyma';
import Kirjautumisnakyma from './Kirjautumisnakyma'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import RavintolaIDnakyma from './RavintolaIDnakyma'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Kayttaja from './Kayttaja'
import RavintolaMuokkaus from './components/RavintolaMuokkaus';
import KayttajaMuokkaus from './components/KayttajaMuokkaus'




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

return(
  <BrowserRouter>
  <div>
    
    <Routes> 
      <Route path="/" element = { <Kirjautumisnakyma/> } />
      <Route path="/Paanakyma" element = { <Paanakyma ravintolat = {ravintolat}/> } />
      <Route path="/Paanakyma/:nimi" element = { <RavintolaIDnakyma ravintolat = {ravintolat}/> } />
      <Route path="/kayttaja" element = { <Kayttaja/> } />
      <Route path="/ravintolat/:sahkoposti" element = { <RavintolaMuokkaus/> }/>
      <Route path="/kayttaja/:sahkoposti" element = { <KayttajaMuokkaus/> }/>
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