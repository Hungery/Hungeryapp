import React from 'react'
import './App.css'
import RavintolaLista from './components/RavintolaLista'
import Logopalkki from './components/Logopalkki'


export default function Paanakyma(props) {
  return (
    <div>
      <Logopalkki/>
    <div className="tausta">
        <RavintolaLista ravintolat = {props.ravintolat} />
    </div>
    </div>
  )
}
