import './styles/Home.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from './Contexts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faUser, faHome} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

const userAuthContextValue = useContext(UserAuthContext);
let navigate = useNavigate();

if(userAuthContextValue.jwt != null){
  return (
    navigate("/Paanakyma", { replace: true })
  )}
else{
  return (
    <div>
      <div><span className="home"> <Link to="/"style={{color: 'lightgreen'}}><FontAwesomeIcon icon={faHome}/>Etusivu</Link></span></div>
      <div>
        <span className="otsikko1">Hungery</span>
      </div>
      <div>
      <span className="otsikko2">Vegaanista kasviruokaa jokaiselle</span>
      </div>
      <div>
      <div><span className="welcome">Tervetuloa Hungeryyn!</span></div>
      </div>
      <div>
      <div className="mustdo">Tilataksesi ruokaa sinun täytyy kirjautua sisään:</div>
      </div>
      <div>
            <Link to="/login"style={{color: 'lightgreen'}}>Kirjaudu sisään tästä <FontAwesomeIcon icon={faSignInAlt}/></Link>
            <div><span> Tai jos sinulla ei ole vielä käyttäjää, </span>
            <span className="register">
            <Link to="/signup"style={{color: 'lightgreen'}}>luo käyttäjä tästä <FontAwesomeIcon icon={faUser} /></Link></span></div>
      </div>
    </div>
    )
  }
}
