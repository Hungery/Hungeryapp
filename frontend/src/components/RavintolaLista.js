import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Buttons from './Buttons'


export default function RavintolaLista(props) {
    const [ravintolat, setRavintolat] = useState(props.ravintolat)
    const [showAll, setShowAll] = useState(true)
    const [newNote2, setNewNote2] = useState('' )
    console.log(props.ravintolat)

    const handleNoteChange2 = (event) => {
        console.log(event.target.value)
        setNewNote2(event.target.value)
      }

    //  console.log(ravintolat)
    const ravintolatToShow = showAll
    ? ravintolat
    : ravintolat.filter(note => note.nimi.toLowerCase().includes(newNote2) || note.nimi.toUpperCase().includes(newNote2))

    //Tässä pieni funktio, jolla hoidetaan nappien fillteröinti ominaisuus
    //Tämä lähtetetään propseina Buttons komponentille
    const filterItem = (curcat) => {
      const newItem = props.ravintolat.filter((newVal) => {
        return newVal.tyyppi === curcat; 
            // comparing category for displaying data
      });
      setRavintolat(newItem);
    };
    console.log(props.ravintolat)

    //Tässä ravintolalistasta otetaan talteen muuttujaan ravintoloiden tyypit,
    // jotka laitetaan nappien nimiksi
    const ravintolaTyypit = [...new Set(props.ravintolat.map((Val) => Val.tyyppi))];
    console.log(props.ravintolat)

  return (
    <div>
        <div className="filtteriPalkki">
         <button onClick={() => setShowAll(!showAll)} className="nappi">
          {showAll ? 'Hae ravintolaa nimellä' : 'Haetaan ravintolaa nimellä' }
         </button>
         <form >
            <input value = {newNote2} className="tekstikentta"
            onChange = {handleNoteChange2}/>
         </form> 
         <Buttons  setRavintolat ={setRavintolat} filterItem = {filterItem} ravintolaTyypit = {ravintolaTyypit} ravintolat = {props.ravintolat}/>
        </div>
        <div className="ravintolaElementti">
        { ravintolatToShow.map(ravintolat =>
            <Link to={ ravintolat.nimi} key = {ravintolat.nimi} className="ravintolaListaElementti" >
                <div><h1>{ravintolat.nimi}</h1></div>
                <div> <h2>{ravintolat.tyyppi} </h2> </div> 
            </Link>
            )} 
        </div> 
    </div>
  )
}


/* alkuperäinen napi järjestys
<div className="filtteriPalkkiElementti">
         <button className="nappi">Asian</button> 
         <button className="nappi">Mexican</button>
         <button className="nappi">American</button>  
         </div>  */