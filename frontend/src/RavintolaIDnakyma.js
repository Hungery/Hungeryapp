import React from 'react'
import { useParams } from 'react-router-dom'


export default function RavintolaIDnakyma(props) {
    const id = useParams();
    console.log(id);
    const ravintola = props.ravintolat.find(n => n.idd === id.idd);
    if (ravintola == null){
        return <div>No matching ravintola</div>
    }
  return (
      <div>
          <div>Täältä löytyy ravintola {ravintola.title}  tiedot.
               Hintana {ravintola.price} €
          </div>
      </div>
    
  )
}
