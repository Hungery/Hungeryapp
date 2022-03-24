import Paanakyma from './Paanakyma';
import Kirjautumisnakyma from './Kirjautumisnakyma'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import restaurants from './data.json'

const App = () => (
  <BrowserRouter>
  <div>
    <div className="logopalkki">
      <div className="logo"> Tässä logo </div>
      <div> kirjautumisnappi</div>
    </div>
    <Routes> 
      <Route path="/" element = { <Kirjautumisnakyma/> } />
      <Route path="/Paanakyma" element = { <Paanakyma ravintolat = {restaurants}/> } />

    </Routes>
  </div>
  </BrowserRouter>
)

export default App

/*     
    
    <Kayttajanluonti/>
    <Ravontilanadmin/>
    <Tilauksenloppu/>
    <Ravintolanakyma/>*/