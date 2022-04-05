import './styles/LoginView.css'
import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Constants from './Constants.json';
import {UserAuthContext} from './Contexts'
import SignupView from './SignupView';


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
        navigate("/signup", { replace: true });
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
      loginUIControls = <button type="submit">Kirjaudu</button>
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
      loginUIControls = <button type="submit">Kirjaudu</button>
  }


  return (
    <div>
      <span className="welcome">
      <h1><h2>Hungery</h2> Vegaanista kasviruokaa jokaiselle</h1>
      </span>
      <div1>Kirjaudu sisään</div1>
      <form onSubmit={ onSubmit }>
        <div2>
        Sähköposti <input type="text" name="sahkoposti"/>
        </div2>
        <div>
        Salasana <input type="text" name="salasana"/>
        </div>
        <div>
          { loginUIControls }
        </div>
        <div>
        { UserAuthContextValue.jwt != null ?
          <Link to="protected">Go to protected view</Link>
          :
          <>
           <h2>Eikö sinulla ole vielä käyttäjää?
            <Link to="signup">Luo sellainen tästä</Link><br />
            </h2>
          </>
        }
      </div>
      </form>
    </div>
  )
}

