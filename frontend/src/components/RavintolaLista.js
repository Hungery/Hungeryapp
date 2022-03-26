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
         <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Näyttää kaikki ravintolat' : 'Hakee ravintolaa hakusanalla' }
         </button>

         <form>
            <input value = {newNote2}
            onChange = {handleNoteChange2}/>
            </form>       
        </div>
        

        { ravintolatToShow.map(ravintola =>
            <Link to={ ravintola.idd} key = {ravintola.idd}>
                <div className="ravintolaListaElementti">Ravintola:{ravintola.name} || Tyyli: {ravintola.cuisine_type} </div>
            </Link>
            )}  
    </div>
  )
}
