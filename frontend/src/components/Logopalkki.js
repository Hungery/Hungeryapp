import React from 'react'
import { Link } from 'react-router-dom'

export default function Logopalkki() {
  return (
    <div>
      <div className="logopalkki">
      <div className="logo"> <h3> Tässä logo </h3></div>
      <Link to="/Kayttaja" className="nappi"> Käyttäjä</Link>
      </div>
    </div>
  )
}
