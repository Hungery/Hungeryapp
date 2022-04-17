import React from 'react'
import Logopalkkirestaurant from './components/Logopalkkirestaurant'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Constants from './Constants'



export default function RavintolaMuokkaus() {

    const [ravintolat, setRavintolat] = useState([]);
    const [nimi, setNimi] = useState(ravintolat.nimi);
    const [osoite, setOsoite] = useState(ravintolat.osoite);
    const [tyyppi, setTyyppi] = useState(ravintolat.tyyppi);
    const [aukioloajat, setAukioloajat] = useState(ravintolat.aukioloajat);
    const [hintataso, setHintataso] = useState(ravintolat.hintataso);
  
  
    
      //Tällä saisi ravintolan tiedot ja tiedot asetettaisiin muuttujii, niin ne ei häipyisi jos tekstikenttä on tyhjä
      //'http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi'
      //`http://localhost:8080/ravintolat/${Constants.SAHKOPOSTI}`
   useEffect(() =>{
      const getRavintolatById = async () => {
        const raflat = await axios.get(Constants.API_ADDRESS + `/${Constants.SAHKOPOSTI} `)
        setRavintolat(raflat.data);
        setNimi(raflat.data.nimi);
        setOsoite(raflat.data.osoite);
        setTyyppi(raflat.data.tyyppi);
        setAukioloajat(raflat.data.aukioloajat);
        setHintataso(raflat.data.hintataso);
        console.log(raflat.data);
        console.log(raflat.data.nimi);
      }
      
        getRavintolatById();
        
     }, []);
  
     console.log(ravintolat);
     console.log(ravintolat.nimi);
      //tää on oikeesti toimiva
    
  
  
    console.log(nimi);
  //Kun ravintola tai käyttäjä kirjautuu sisään, niin se antaa propseina eteenpäin omat tiedot
  // jotka voi osoittaa yllä oleviin muuttujiin.
  
  //Tässä testaan ettää toimii. 
  /*
  console.log(ravintolat);
      const [nimi, setNimi] = useState(Constants.NIMI);
      const [osoite, setOsoite] = useState(Constants.OSOITE);
      const [tyyppi, setTyyppi] = useState(Constants.TYYPPI);
      const [aukioloajat, setAukioloajat] = useState(Constants.AUKIOLOAJAT);
      const [hintataso, setHintataso] = useState(Constants.HINTATASO);
  */
     console.log(ravintolat.nimi);
     console.log(nimi);
      const sahkoposti = useParams();
      console.log(sahkoposti);
      console.log(Constants.SAHKOPOSTI)
      console.log(ravintolat)
     // tällä toimii "http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi"
      // Tämä varmasti toimii ilman cors ongelmaa... `http://localhost:8080/ravintolat/${sahkoposti} `
      const updateAPIData = async () => {
          const result = await axios.put(Constants.API_ADDRESS + `/${Constants.SAHKOPOSTI} `, { 
              nimi: nimi,
              osoite: osoite,
              tyyppi: tyyppi,
              aukioloajat: aukioloajat,
              hintataso: hintataso
              
          }, [] ); 
          console.log(result);
      }
    return (
        <div className = "tausta">
            <Logopalkkirestaurant/>
            
      <div className = "ravintolaElementti2">
      <h3 className="logo">Täälä muokataan ravintolan tietoja</h3>
     
      <form >
              <label className = "nappi"> Ravintolan nimi</label>
              <input className = " tekstikentta2" placeholder=" Ravintolan nimi" onChange={(e) => setNimi(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Ravintolan Osoite</label>
              <input className = " tekstikentta2" placeholder=" Ravintolan osoite" onChange={(e) => setOsoite(e.target.value)} />
      </form> 
      <form >
              <label className = "nappi"> Ravintolan Tyyppi</label>
              <input className = " tekstikentta2" placeholder=" Ravintolan tyyppi" onChange={(e) => setTyyppi(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Ravintolan aukioloajat</label>
              <input className = " tekstikentta2" placeholder=" Ravintolan aukioloajat" onChange={(e) => setAukioloajat(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Ravintolan hintataso</label>
              <input  className = " tekstikentta2" placeholder=" Ravintolanhintataso" onChange={(e) => setHintataso(e.target.value)}/>
      </form> 
      
      </div>
      <button className="nappi"type = "submit" onClick={updateAPIData}>Päivitä</button>
      
  
  
      </div>
    )
  }
  