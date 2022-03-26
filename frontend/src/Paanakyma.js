import React from 'react'
import './App.css'
import RavintolaLista from './components/RavintolaLista'


export default function Paanakyma(props) {
  return (
    <div >
        
        <RavintolaLista ravintolat = {props.ravintolat} />

    </div>
  )
}
