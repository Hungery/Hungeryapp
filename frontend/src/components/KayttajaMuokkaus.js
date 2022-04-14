import React from 'react'
import Logopalkki from './Logopalkki'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Constants2 from './Constants2'



export default function KayttajaMuokkaus() {

    const [etunimi, setEtunimi] = useState(Constants2.ETUNIMI);
    const [sukunimi, setSukunimi] = useState(Constants2.SUKUNIMI);
    const [osoite, setOsoite] = useState(Constants2.OSOITE);
    const [puhnro, setPuhnro] = useState(Constants2.PUHNRO);
 
    console.log(Constants2.SAHKOPOSTI)
   // tällä toimii "http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi"
    const updateAPIData = async () => {
        const result = await axios.put(`http://localhost:8080/customers/${Constants2.SAHKOPOSTI} `, { 
            etunimi: etunimi,
            sukunimi: sukunimi,
            osoite: osoite,
            puhnro: puhnro
        }, [] ); 
        console.log(result);
    }
    const data = {etunimi, sukunimi, osoite, puhnro};
    console.log(data);



  return (
      <div className = "tausta">
          <Logopalkki/>
    <div className = "ravintolaElementti2">
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
    </div>
    <button className="nappi"type = "submit" onClick={updateAPIData}>Päivitä tiedot</button>
    


    </div>
  )
}


/**    const sahkoposti = useParams();

    const [ravintolat, setRavintolat] = useState([]);
  
  useEffect(() =>{
    const getRavintolat = async () => {
      const raflat = await axios.get('http://localhost:8080/ravintolat/{sahkoposti}')

      setRavintolat(raflat.data);
      console.log(raflat.data);

    }

      getRavintolat();

   }, []); */

      /* const setData = (data) => {
        let { nimi, osoite, tyyppi, aukioloajat, hintataso } = data;
        setNimi(nimi);
        setOsoite(osoite);
        setTyyppi(tyyppi);
        setAukioloajat(aukioloajat);
        setHintataso(hintataso)      
}*/

    //Tällä saisi ravintolan tiedot ja tiedot asetettaisiin muuttujii, niin ne ei häipyisi jos tekstikenttä on tyhjä
    //'http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi'
 /* useEffect(() =>{
    const getRavintolat = async () => {
      const raflat = await axios.get('http://localhost:8080/ravintolat/')
      setRavintolat(raflat.data);
      console.log(raflat.data);
    }
    
      getRavintolat();
      
   }, []);*/

     /* tää on oikeesti toimiva
    const [nimi, setNimi] = useState(ravintolat.nimi);
    const [osoite, setOsoite] = useState(ravintolat.osoite);
    const [tyyppi, setTyyppi] = useState(ravintolat.tyyppi);
    const [aukioloajat, setAukioloajat] = useState(ravintolat.aukioloajat);
    const [hintataso, setHintataso] = useState(ravintolat.hintataso);
*/

//Kun ravintola tai käyttäjä kirjautuu sisään, niin se antaa propseina eteenpäin omat tiedot
// jotka voi osoittaa yllä oleviin muuttujiin.