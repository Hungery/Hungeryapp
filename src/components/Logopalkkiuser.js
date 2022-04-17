import React from 'react'
import { Link } from 'react-router-dom'
import logoo from '../img/logoo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons"

export default function Logopalkkirestaurant() {
  return (
    <div>
      <div className="logopalkki">
      <Link to="/paanakyma" className="nappi"><FontAwesomeIcon icon={faHome}/> Etusivu</Link>
      <img alt="logo" className="logoo" src={logoo} />
      </div>
    </div>
  )
}
