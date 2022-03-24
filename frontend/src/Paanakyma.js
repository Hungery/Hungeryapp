import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function Paanakyma(props) {
  return (
    <div >
        { props.ravintolat.map(ravintola =>
            
            <Link to={ ravintola.idd} key = {ravintola.idd}>
                <div className="ravintolaListaElementti">Ravintola:{ravintola.name} || Tyyli: {ravintola.cuisine_type} </div>
            </Link>
            )}

    </div>
  )
}
