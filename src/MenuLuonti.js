import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/KayttajaMuokkaus.css'
import Constants from './Constants'
import LogopalkkiMenunluonti from './components/LogopalkkiMenunluonti'

export default function MenuLuonti() {

    const [nimi, setNimi] = useState("");
    const [kuvaus, setKuvaus] = useState("");
    const [kategoria, setKategoria] = useState("");
    const [nimiravintola, setNimiravintola] = useState(Constants.SAHKOPOSTI);
    const [hinta, setHinta] = useState("");


    const updateAPIData = async () => {
        const result = await axios.post("http://localhost:8080/menus ", { 
            nimi: nimi,
            kuvaus: kuvaus,
            tuotekategoria: kategoria,
            nimiravintola: nimiravintola,
            hinta: hinta
        }, [] ); 
        console.log(result);
    }
  


  return (
        <div className = "tausta">
            <LogopalkkiMenunluonti/>
            
      <div className = "ravintolaElementti2">
      <h3 className="logo">Täälä luodaan uusi ruoka</h3>
     
      <form >
              <label className = "nappi"> Ruuan nimi</label>
              <input className = " tekstikentta2" placeholder=" Ruuan nimi" onChange={(e) => setNimi(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Kuvaus</label>
              <input className = " tekstikentta2" placeholder=" Ruuan kuvaus" onChange={(e) => setKuvaus(e.target.value)} />
      </form> 
      <form >
              <label className = "nappi"> Tuotekategoria</label>
              <input className = " tekstikentta2" placeholder=" Ruuan kategoria" onChange={(e) => setKategoria(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Hinta</label>
              <input  className = " tekstikentta2" placeholder=" Hinta" onChange={(e) => setHinta(e.target.value)}/>
      </form> 
      
      </div>
      <button className="nappi"type = "submit" onClick={updateAPIData}>Luo</button>
      
  
  
      </div>
    )
  
}
