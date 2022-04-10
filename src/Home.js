import './styles/Home.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from './Contexts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faEnvelope,faLock,faUndo,faUser, faHome} from "@fortawesome/free-solid-svg-icons"

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
      <div><span className="home"> <Link to="/"style={{color: 'lightgreen'}}><FontAwesomeIcon icon={faHome}/>Etusivu</Link></span></div>
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      <div>
      <div><span className="welcome">Tervetuloa Hungeryyn!</span></div>
      </div>
      <div>
      <div className="mustdo">Tilataksesi ruokaa sinun täytyy kirjautua sisään:</div>
      </div>
      <div>
            <h3>
            <Link to="/login"style={{color: 'lightgreen'}}>Kirjaudu sisään tästä <FontAwesomeIcon icon={faSignInAlt}/></Link>
            <div><span> Tai jos sinulla ei ole vielä käyttäjää, </span>
            <span className="register">
            <Link to="/signup"style={{color: 'lightgreen'}}>luo käyttäjä tästä <FontAwesomeIcon icon={faUser} /></Link></span></div>
            </h3>
      </div>
    </div>
    )
  }
}
