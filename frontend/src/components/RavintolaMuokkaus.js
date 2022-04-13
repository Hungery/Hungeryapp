import React from 'react'
import Logopalkki from './Logopalkki'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export default function RavintolaMuokkaus() {

    const [ravintolat, setRavintolat] = useState([]);
  
    //Tällä saisi ravintolan tiedot ja tiedot asetettaisiin muuttujii, niin ne ei häipyisi jos tekstikenttä on tyhjä
  /*useEffect(() =>{
    const getRavintolat = async () => {
      const raflat = await axios.get('http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi')
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

    const [nimi, setNimi] = useState('Hamppi purgerit');
    const [osoite, setOsoite] = useState('Kotikatu 3');
    const [tyyppi, setTyyppi] = useState('purjoa');
    const [aukioloajat, setAukioloajat] = useState('aina auki');
    const [hintataso, setHintataso] = useState('halpa');

 
    const sahkoposti = useParams();
    console.log(sahkoposti);

   // tällä toimii "http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi"
    // Tämä varmasti toimii ilman cors ongelmaa... `http://localhost:8080/ravintolat/${sahkoposti} `
    const updateAPIData = async () => {
        const result = await axios.put("http://localhost:8080/ravintolat/MahtiBurgerit@mahti.fi", { 
            nimi: nimi,
            osoite: osoite,
            tyyppi: tyyppi,
            aukioloajat: aukioloajat,
            hintataso: hintataso
            
        }, [] ); 
        console.log(result);
    }
    
    const data = {nimi, osoite, tyyppi, aukioloajat, hintataso};
    console.log(data);



  return (
      <div>
          <Logopalkki/>
    <div>Täälä muokataan ravintolan tietoja</div>
    <form >
            <label> Ravintolan nimi</label>
            <input placeholder=" Ravintolan nimi" onChange={(e) => setNimi(e.target.value)}/>
    </form> 
    <form >
            <label> Ravintolan Osoite</label>
            <input placeholder=" Ravintolan osoite" onChange={(e) => setOsoite(e.target.value)} />
    </form> 
    <form >
            <label> Ravintolan Tyyppi</label>
            <input placeholder=" Ravintolan tyyppi" onChange={(e) => setTyyppi(e.target.value)}/>
    </form> 
    <form >
            <label> Ravintolan aukioloajat</label>
            <input placeholder=" Ravintolan aukioloajat" onChange={(e) => setAukioloajat(e.target.value)}/>
    </form> 
    <form >
            <label> Ravintolan hintataso</label>
            <input placeholder=" Ravintolanhintataso" onChange={(e) => setHintataso(e.target.value)}/>
    </form> 
    <button type = "submit" onClick={updateAPIData}>Päivitä</button>
    


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