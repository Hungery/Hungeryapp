import './styles/SignupViewRestaurant.css';
import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faLock,faHome} from "@fortawesome/free-solid-svg-icons"
import logoo from './img/logoo.png';



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
      <div><span className="nappix"> <Link to="/"style={{color: 'black'}}><FontAwesomeIcon icon={faHome}/>ETUSIVU</Link></span></div>
      <img alt="logox" className="logox" src={logoo} />
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
          <div className="oliko">
          Oliko sinulla sittenkin jo ravintolallesi tunnukset?
            <br />
            <div>-</div>
            <div><Link className="nappixy" to="/loginRestaurant"style={{color: 'black'}}> Mene kirjautumaan tästä</Link></div>
            <div/>
        </div>
      </form>
    </div>
  )
}
