import './styles/LoginView.css'
import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';
import {UserAuthContext} from './Contexts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faEnvelope,faLock,faHome} from "@fortawesome/free-solid-svg-icons"


export default function Home(props) {

  const UserAuthContextValue = useContext(UserAuthContext);
  let navigate = useNavigate();
  const [ loginProcessState, setLoginProcessState ] = useState("idle");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoginProcessState("processing");
    try {
      const json = JSON.stringify({sahkoposti: event.target.sahkoposti.value, salasana: event.target.salasana.value})
      const result = await axios.post(Constants.API_ADDRESS + "/login", json,  {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(result);
      console.log(result.data);
      setLoginProcessState("success");
      setTimeout(() => {
        setLoginProcessState("idle")
        UserAuthContextValue.login(result.data.token);
        navigate("/Paanakyma", { replace: true });
      }, 1500);
    } catch (error) {
      console.error(error.message);
      setLoginProcessState("error");
      setTimeout(() => setLoginProcessState("idle"), 1500);
    }
  }

  let loginUIControls = null;
  switch(loginProcessState) {
    case "idle":
      loginUIControls = <button className="loginbutton" type="submit"> Kirjaudu <FontAwesomeIcon icon={faSignInAlt}/></button>
      break;

    case "processing":
      loginUIControls = <span style={{color: 'blue'}}>Kirjaudutaan sisään...</span>
      break;

    case "success":
      loginUIControls = <span style={{color: 'green'}}>Kirjautuminen onnistui</span>
      break;

    case "error":
      loginUIControls = <span style={{color: 'red'}}>Väärä käyttäjänimi tai salasana</span>
      break;

    default:
      loginUIControls = <button style={{color: 'green'}}name="loginbutton" type="submit">Kirjaudu</button>
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
      <div>
        <span className="login">Kirjaudu sisään</span>
      </div>
      <form onSubmit={ onSubmit }>
        <div>
          <span className="email">
        Sähköposti <FontAwesomeIcon icon={faEnvelope} /><input className="passbox1" type="text" name="sahkoposti"/>
        </span>
        </div>
        <div>
        <span className="password">
        Salasana <FontAwesomeIcon icon={faLock} /><input className="passbox2" type="password" name="salasana"/>
        </span>
        </div>
        <div>
          { loginUIControls }
        </div>
        <div>
           <span className="register">Eikö sinulla ollutkaan vielä käyttäjää? <Link to="/signup" className="reglink"> Luo sellainen tästä</Link></span>
      </div>
      <div>
      <span className="register">Ravintolan kirjautuminen: <Link to="/loginRestaurant" className="reglink"> Siirry kirjautumaan tästä</Link></span>
      </div>
      </form>
    </div>
  )
}

