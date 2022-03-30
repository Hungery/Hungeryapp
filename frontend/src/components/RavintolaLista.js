import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function RavintolaLista(props) {
    const [ravintolat, setRavintolat] = useState(props.ravintolat)
    const [showAll, setShowAll] = useState(true)
    const [newNote2, setNewNote2] = useState('' )

    const handleNoteChange2 = (event) => {
        console.log(event.target.value)
        setNewNote2(event.target.value)
      }

    const ravintolatToShow = showAll
    ? ravintolat
    : ravintolat.filter(note => note.name.includes(newNote2))

  return (
    <div>
        <div className="filtteriPalkki">
         <button onClick={() => setShowAll(!showAll)} className="nappi">
          {showAll ? 'Hae ravintolaa' : 'Hae ravintolaa' }
         </button>
         <form >
            <input value = {newNote2} className="tekstikentta"
            onChange = {handleNoteChange2}/>
         </form> 
         <div className="filtteriPalkkiElementti">
         <button className="nappi">Asian</button> 
         <button className="nappi">Mexican</button>
         <button className="nappi">American</button>  
         </div>   
        </div>
        
        <div className="ravintolaElementti">
        { ravintolatToShow.map(ravintola =>
            <Link to={ ravintola.idd} key = {ravintola.idd} className="ravintolaListaElementti" >
                <div><h1>{ravintola.name}</h1></div>
                <div> <h2>{ravintola.cuisine_type} </h2> </div> 
            </Link>
            )} 
        </div> 
    </div>
  )
}
