import Paanakyma from './Paanakyma';
import Kirjautumisnakyma from './Kirjautumisnakyma'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import restaurants from './data.json'
import RavintolaIDnakyma from './RavintolaIDnakyma'
import { v4 as uuidv4 } from 'uuid';


const ravintolat = restaurants.map(ravintola => {
  return { ...ravintola, idd: uuidv4() }
})

const App = () =>(
  <BrowserRouter>
  <div>
    <div className="logopalkki">
      <div className="logo"> Tässä logo </div>
      <div> kirjautumisnappi</div>
    </div>
    <Routes> 
      <Route path="/" element = { <Kirjautumisnakyma/> } />
      <Route path="/Paanakyma" element = { <Paanakyma ravintolat = {ravintolat}/> } />
      <Route path="/Paanakyma/:idd" element = { <RavintolaIDnakyma ravintolat = {ravintolat}/> } />
    </Routes>
  </div>
  </BrowserRouter>
)

export default App

/*     
    
    <Kayttajanluonti/>
    <Ravontilanadmin/>
    <Tilauksenloppu/>
    */