import './styles/Home.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from './Contexts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faUserAlt, faHome} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom';
import logoo from './img/logoo.png';

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
      <div><span className="nappix"> <Link to="/"style={{color: 'black'}}><FontAwesomeIcon icon={faHome}/>ETUSIVU</Link></span></div>
      <img alt="logox" className="logox" src={logoo} />
      <div>
      <div><span className="welcome">Tervetuloa Hungeryyn!</span></div>
      </div>
      <div>
      <div className="mustdo">Tilataksesi ruokaa sinun täytyy kirjautua sisään:</div>
      </div>
      <div>
            <span className="nappixy">
            <Link to="/login"style={{color: 'black'}}>Kirjaudu sisään tästä <FontAwesomeIcon icon={faSignInAlt}/></Link></span>
            <div>.</div>
            <div>
              <span className="mustdo"> Tai jos sinulla ei ole vielä käyttäjää: </span>
            </div>
            <div>.</div>
            <div>
            <span className="nappixy">
            <Link to="/signup"style={{color: 'black'}}>Luo käyttäjä tästä <FontAwesomeIcon icon={faUserAlt} /></Link></span>
            </div>
      </div>
    </div>
    )
  }
}
