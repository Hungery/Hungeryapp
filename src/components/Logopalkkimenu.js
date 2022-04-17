import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"
import logoo from '../img/logoo.png';

export default function Logopalkkimenu() {
  return (
    <div>
      <div className="logopalk">
      <Link to="/paanakyma" className="nappi"><FontAwesomeIcon icon={faHome}/> Etusivu</Link>
      <img alt="logoo" className="logoo" src={logoo} />
      <Link to="/ostoskori" className="nappi"> Ostoskori</Link>
      </div>
    </div>
  )
}
