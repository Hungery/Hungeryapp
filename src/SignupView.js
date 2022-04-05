import './styles/SignupView.css';
import React, { useState } from 'react';
import axios from 'axios';
import Constants from './Constants.json';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'



export default function SignupView() {
  let navigate = useNavigate();
  const [ signupProcessState, setSignupProcessState ] = useState("idle");

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("processing");
    try {
      const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', {
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
      signupUIControls = <button type="submit">Luo käyttäjä</button>
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
      signupUIControls = <button type="submit">Luo käyttäjä</button>
  }

  return (
    <div>
      <span className="welcome">
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      </span>
      <span className="kayttajanLuonti"> Käyttäjän luonti </span>
      <form onSubmit={ handleSignupSubmit }>
        <div>
          Etunimi<br />
          <input type="text" name="etunimi" />
        </div>
        <div>
          Sukunimi<br />
          <input type="text" name="sukunimi" />
        </div>
        <div>
          Puhelinnumero<br />
          <input type="text" name="puhnro" />
        </div>
        <div>
          Osoite<br />
          <input type="text" name="osoite" />
        </div>
        <div>
          Sähköposti<br />
          <input type="text" name="sahkoposti" />
        </div>
        <div>
          Salasana<br />
          <input type="password" name="salasana" />
        </div>
        <div>
          { signupUIControls }
          <h2>Saitko luotua käyttäjän vai oliko sinulla sittenkin jo sellainen?
            <Link to="login">Mene kirjautumaan tästä</Link><br />
            </h2>
        </div>
      </form>
    </div>
  )
}
