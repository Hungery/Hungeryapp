import './styles/SignupView.css';
import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone,faEnvelope,faLock,faUndo,faUserPlus,faUser,faHome} from "@fortawesome/free-solid-svg-icons"



export default function SignupView() {
  let navigate = useNavigate();
  const [ signupProcessState, setSignupProcessState ] = useState("idle");

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("processing");
    try {
      /*
      const json = JSON.stringify({etunimi: event.target.etunimi.value, sukunimi: event.target.sukunimi.value, puhnro: event.target.puhnro.value, osoite: event.target.osoite.value, sahkoposti: event.target.sahkoposti.value, role: "ASIAKAS", salasana: event.target.salasana.value})
      const result = await axios.post(Constants.API_ADDRESS + "/register", json,  {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      */
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
      <span className="welcome">
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      </span>
      <span className="kayttajanLuonti"> Käyttäjän luonti </span>
      <form onSubmit={ handleSignupSubmit }>
        <div>
          Etunimi <FontAwesomeIcon icon={faUser} /> <input type="text" name="etunimi" />
        </div>
        <div>
          Sukunimi <FontAwesomeIcon icon={faUser} /> <input type="text" name="sukunimi" />
        </div>
        <div>
          Puhelinnumero <FontAwesomeIcon icon={faPhone} /> <input type="text" name="puhnro" />
        </div>
        <div>
          Osoite <FontAwesomeIcon icon={faHome} /> <input type="text" name="osoite" />
        </div>
        <div>
          Sähköposti <FontAwesomeIcon icon={faEnvelope} /> <input type="text" name="sahkoposti" />
        </div>
        <div>
          Salasana <FontAwesomeIcon icon={faLock} /> <input type="password" name="salasana" />
        </div>
          { signupUIControls }
          <div/>
          <div>
          Saitko luotua käyttäjän vai oliko sinulla sittenkin jo sellainen?
            <Link to="login">Mene kirjautumaan tästä</Link><br />
            <div/>
        </div>
      </form>
    </div>
  )
}
