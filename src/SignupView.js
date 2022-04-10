import './styles/SignupView.css';
import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,faEnvelope,faLock,faUndo,faUserPlus,faUser,faHome} from "@fortawesome/free-solid-svg-icons"
import SignupViewRestaurant from './SignupViewRestaurant';



export default function SignupView() {
  let navigate = useNavigate();
  const [ signupProcessState, setSignupProcessState ] = useState("idle");

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("processing");
    try {
      const result = await axios.post(Constants.API_ADDRESS + '/register', {
        etunimi: event.target.etunimi.value,
        sukunimi: event.target.sukunimi.value,
        puhnro: event.target.puhnro.value,
        osoite: event.target.osoite.value,
        sahkoposti: event.target.sahkoposti.value,
        role: "ASIAKAS",
        salasana: event.target.salasana.value
      })
      console.log(result);
      setSignupProcessState("success");
      setTimeout(() => {
        setSignupProcessState("idle")
        navigate("/login", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error);
      setSignupProcessState("error");
      setTimeout(() => setSignupProcessState("idle"), 1500);
    }
  };

  let signupUIControls = null;
  switch(signupProcessState) {
    case "idle":
      signupUIControls = <button class="signupbutton" type="submit">Luo käyttäjä</button>
      break;

    case "processing":
      signupUIControls = <span style={{color: 'blue'}}>Luodaan käyttäjää...</span>
      break;

    case "success":
      signupUIControls = <span style={{color: 'green'}}>Käyttäjä luotu</span>
      break;

    case "error":
      signupUIControls = <span style={{color: 'red'}}>Käyttäjän luonti epäonnistui tai se on jo olemassa</span>
      break;

    default:
      signupUIControls = <button class="signupbutton" type="submit">Luo käyttäjä</button>
  }

  return (
    <div>
      <div><span className="home"> <Link to="/"style={{color: 'lightgreen'}}><FontAwesomeIcon icon={faHome}/>Etusivu</Link></span></div>
      <span className="welcome">
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      </span>
      <div><span className="kayttajanLuonti"> Käyttäjän luonti </span></div>
      <form onSubmit={ handleSignupSubmit }>
        <div>
        <span className="firstname">
          Etunimi <FontAwesomeIcon icon={faUser} /> <input className="passbox1" type="text" name="etunimi" />
          </span>
        </div>
        <div>
        <span className="lastname">
          Sukunimi <FontAwesomeIcon icon={faUser} /> <input className="passbox2" type="text" name="sukunimi" />
          </span>
        </div>
        <div>
        <span className="phone">
          Puhelinnumero <FontAwesomeIcon icon={faPhone} /> <input className="passbox3" type="text" name="puhnro" />
          </span>
        </div>
        <div>
        <span className="address">
          Osoite <FontAwesomeIcon icon={faHome} /> <input className="passbox4" type="text" name="osoite" />
          </span>
        </div>
        <div>
        <span className="email">
          Sähköposti <FontAwesomeIcon icon={faEnvelope} /> <input className="passbox5" type="text" name="sahkoposti" />
          </span>
        </div>
        <div>
        <span className="password">
          Salasana <FontAwesomeIcon icon={faLock} /> <input className="passbox6" type="password" name="salasana" />
          </span>
        </div>
          { signupUIControls }
          <div/>
          <div>
           Onko sinulla sittenkin jo käyttäjätunnus?
            <Link to="/login"style={{color: 'lightgreen'}}> Mene kirjautumaan tästä</Link><br />
            <div/>
            <div>Tahdotko luoda uuden tunnuksen ravintolallesi?
              <Link to="/signupRestaurant"style={{color: 'lightgreen'}}> Luo sellainen tästä</Link>
            </div>
        </div>
      </form>
    </div>
  )
}
