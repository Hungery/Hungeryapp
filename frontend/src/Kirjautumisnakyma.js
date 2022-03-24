import React from 'react'
import { Link } from 'react-router-dom'

export default function Kirjautumisnakyma() {
  return (
      <div>
          <p>Hello world</p> 
          <div>Kirjautumisnakyma</div>
          <Link to ="/Paanakyma"><button> Kirjaudu</button></Link> 

      </div>
    
  )
}
