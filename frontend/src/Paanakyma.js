import React from 'react'
import './App.css'

export default function Paanakyma(props) {
  return (
    <div>
        { props.ravintolat.map(ravintola =>
            <div className="ravintolaListaElementti">Ravintola:{ravintola.name} || Osoite: {ravintola.address} || Tyyli: {ravintola.cuisine_type}</div>
            
            )}

    </div>
  )
}
