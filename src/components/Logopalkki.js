import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from '../Contexts';

export default function Logopalkki() {
  const userAuthContextValue = useContext(UserAuthContext);
  return (
    <div>
      <div className="logopalkki">
      <button className="nappi" onClick={() => userAuthContextValue.logout()} >Kirjaudu ulos</button>
      <div className="logo"> <h3> Tässä logo </h3></div>
      <Link to="/Kayttaja" className="nappi"> Käyttäjä</Link>
      </div>
    </div>
  )
}
