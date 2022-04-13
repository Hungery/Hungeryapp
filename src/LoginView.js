import './styles/LoginView.css'
import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';
import {UserAuthContext} from './Contexts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt,faEnvelope,faLock,faHome} from "@fortawesome/free-solid-svg-icons"
import logoo from './img/logoo.png';

export default function LoginView() {
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
      console.log(result.config.data);
      const logindata = JSON.parse(result.config.data)
      Constants.SAHKOPOSTI = logindata.sahkoposti;
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
      <div><span className="nappix"> <Link to="/"style={{color: 'black'}}><FontAwesomeIcon icon={faHome}/>ETUSIVU</Link></span></div>
      <img alt="logox" className="logox" src={logoo} />
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
           <span className="register">Eikö sinulla ollutkaan vielä käyttäjää?</span>
      </div>
      <div>-</div>
      <div><Link to="/signup" className="nappixy"> Luo käyttäjätunnus tästä</Link></div>
      <div>-</div>
      <div>
      <span className="register">Ravintolan kirjautuminen:</span>
      </div>
      <div>-</div>
      <div><Link to="/loginRestaurant" className="nappixy"> Siirry ravintolan kirjautumiseen tästä</Link></div>
      </form>
    </div>
  )
}
