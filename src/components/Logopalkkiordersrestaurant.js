import React from 'react'
import { Link } from 'react-router-dom'
import logoo from '../img/logoo.png';

export default function Logopalkkiorders() {
  return (
    <div>
      <div className="logopalk">
      <Link to="/ravintolat/:sahkoposti" className="nappi"> Takaisin</Link>
      <img alt="logoo" className="logoo" src={logoo} />
      </div>
    </div>
  )
}
