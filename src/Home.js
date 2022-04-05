import './styles/Home.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from './Contexts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faEnvelope,faLock,faUndo,faUser} from "@fortawesome/free-solid-svg-icons"

export default function Home() {

const userAuthContextValue = useContext(UserAuthContext);


if(userAuthContextValue.jwt != null){
  return (
    <div>
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      <div>
      <div className="welcome">Tähän vois kyllä tulla Juhan tekemä etusivu</div>
    </div>
      <div>Tähän vois kyllä tulla Juhan tekemä etusivu</div>
      <button onClick={() => userAuthContextValue.logout()} >Logout</button>
      </div>
  )}
else{
  return (
    <div>
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      <div>
      <div className="welcome">Tervetuloa Hungeryyn!</div>
      </div>
      <div>
      <div className="mustdo">Tilataksesi ruokaa sinun täytyy kirjautua sisään:</div>
      </div>
      <div>
            <h3>
            <Link to="login"style={{color: 'orange'}}>Kirjaudu sisään tästä <FontAwesomeIcon icon={faSignInAlt}/></Link>
            <span> Tai jos sinulla ei ole vielä tunnusta </span>
            <Link to="signup"style={{color: 'orange'}}>luo käyttäjä tästä <FontAwesomeIcon icon={faUser} /></Link>
            </h3>
      </div>
    </div>
    )
  }
}
