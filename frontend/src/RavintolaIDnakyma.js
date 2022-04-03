import React from 'react'
import { useParams } from 'react-router-dom'


export default function RavintolaIDnakyma(props) {
    const id = useParams();
    console.log(id);
    const ravintola = props.ravintolat.find(n => n.nimi === id.nimi);
    if (ravintola == null){
        return <div>No matching ravintola</div>
    }
  return (
      <div>
          <div>Täältä löytyy ravintola {ravintola.nimi}  tiedot.
               Hintana {ravintola.hintataso} €
          </div>
      </div>
    
  )
}
