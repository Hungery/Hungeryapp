import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserAuthContext } from '../Contexts';
import logoo from '../img/logoo.png';

export default function Logopalkkirestaurant() {
  const userAuthContextValue = useContext(UserAuthContext);
  return (
    <div>
      <div className="logopalkki">
      <button className="nappi" onClick={() => userAuthContextValue.logout()} ><Link style={{color: 'black'}} to="/"> Kirjaudu ulos</Link> </button>
      <img alt="logo" className="logoo" src={logoo} />
      <Link to="/orderhistoryrestaurant" className="nappi"> Ravintolan tilaushistoria</Link>
      </div>
    </div>
  )
}
