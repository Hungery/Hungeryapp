import React from 'react'
import Logopalkkiuser from './components/Logopalkkiuser'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/KayttajaMuokkaus.css'
import Constants from './Constants'



export default function KayttajaMuokkaus() {

    const [kayttaja, setKayttaja] = useState([]);
  
  
    useEffect(() =>{
      const getCustomer = async () => {
        const kayttajat = await axios.get(Constants.API_ADDRESS + `/${Constants.SAHKOPOSTI}`)
        setKayttaja(kayttajat.data);
        setEtunimi(kayttajat.data.etunimi);
        setSukunimi(kayttajat.data.sukunimi);
        setOsoite(kayttajat.data.osoite);
        setPuhnro(kayttajat.data.puhnro);
        console.log(kayttajat.data);
      }
      
        getCustomer();
        
     }, []);
  
      const [etunimi1, setEtunimi] = useState(kayttaja.etunimi);
      const [sukunimi1, setSukunimi] = useState(kayttaja.sukunimi);
      const [osoite1, setOsoite] = useState(kayttaja.osoite);
      const [puhnro1, setPuhnro] = useState(kayttaja.puhnro);
   
      console.log(Constants.SAHKOPOSTI)
      console.log(kayttaja.etunimi)
     // tällä toimii "http://localhost:8080/ravintolat/mkyllonen@gmail.com"
     // pitäs olla tämätt `http://localhost:8080/customers/${Constants2.SAHKOPOSTI} `
      const updateAPIData = async () => {
          const result = await axios.put(`http://localhost:8080/customers/${Constants.SAHKOPOSTI} `, { 
              etunimi: etunimi1,
              sukunimi: sukunimi1,
              osoite: osoite1,
              puhnro: puhnro1
          }, [] ); 
          console.log(result);
      }
    
      console.log(kayttaja);
  
  
  
    return (
        <div className = "tausta">
            <Logopalkkiuser/>

            <div className = "tiedotSivussa">
            <div className = "tiedot">
                <h3>Kayttäjän tiedot</h3> 
               <p>Etunimi: {etunimi1} </p>
               <p>Sukunimi:{sukunimi1} </p>
               <p>Osoite: {osoite1} </p>
               <p>Puhelin numero: {puhnro1} </p>

        </div>
        
      <div className = "ravintolaElementti2" style={{width: '100%'}}>
      <h3 className="logo">Täälä muokataan asiakastietoja</h3>
     
      <form >
              <label className = "nappi"> Etunimi</label>
              <input className = " tekstikentta2" placeholder=" Etunimi" onChange={(e) => setEtunimi(e.target.value)}/>
      </form> 
      <form >
              <label className = "nappi"> Sukunimi</label>
              <input className = " tekstikentta2" placeholder=" Sukunimi" onChange={(e) => setSukunimi>(e.target.value)}/>
      </form>
      <form >
              <label className = "nappi"> Osoite</label>
              <input className = " tekstikentta2" placeholder=" Osoite" onChange={(e) => setOsoite(e.target.value)} />
      </form> 
      <form >
              <label className = "nappi"> Puhelinnumero</label>
              <input className = " tekstikentta2" placeholder=" Puhelin numero" onChange={(e) => setPuhnro(e.target.value)}/>
      </form> 
      <button className="nappi"type = "submit" onClick={updateAPIData}>Päivitä tiedot</button>
      </div>
      
      
      </div>
  
      </div>
    )
  }