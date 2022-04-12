import './styles/SignupViewRestaurant.css';
import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faLock,faHome} from "@fortawesome/free-solid-svg-icons"



export default function SignupView() {
  let navigate = useNavigate();
  const [ signupProcessState, setSignupProcessState ] = useState("idle");
  const idravintola = 7;
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("processing");
    try {
      const result = await axios.post(Constants.API_ADDRESS + '/registerRestaurant', {
        nimi: event.target.nimi.value,
        sahkoposti: event.target.sahkoposti.value,
        salasana: event.target.salasana.value,
        role: "RAVINTOLA"
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
      signupUIControls = <button className="signupbutton" type="submit">Luo käyttäjä</button>
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
      signupUIControls = <button className="signupbutton" type="submit">Luo käyttäjä</button>
  }

  return (
    <div>
      <div><span className="home"> <Link to="/"style={{color: 'lightgreen'}}><FontAwesomeIcon icon={faHome}/>Etusivu</Link></span></div>
      <div>
        <span className="otsikko1">Hungery</span>
      </div>
      <div>
      <span className="otsikko2">Vegaanista kasviruokaa jokaiselle</span>
      </div>
      <div><span className="kayttajanLuonti"> Ravintolan käyttäjätunnuksen luonti </span></div>
      <form onSubmit={ handleSignupSubmit }>
        <div>
          <span className="name">
          Ravintolan nimi <FontAwesomeIcon icon={faHome} /> <input className="passbox1" type="text" name="nimi" />
          </span>
        </div>
        <div>
        <span className="email">
          Sähköposti <FontAwesomeIcon icon={faEnvelope} /> <input className="passbox2" type="text" name="sahkoposti" />
          </span>
        </div>
        <div>
        <span className="password">
          Salasana <FontAwesomeIcon icon={faLock} /> <input className="passbox3" type="password" name="salasana" />
          </span>
        </div>
          { signupUIControls }
          <div/>
          <div>
          Oliko sinulla sittenkin jo ravintolallesi tunnukset?
            <Link to="/loginRestaurant"style={{color: 'lightgreen'}}> Mene kirjautumaan tästä</Link><br />
            <div/>
        </div>
      </form>
    </div>
  )
}
