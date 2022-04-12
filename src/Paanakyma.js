import React, { useContext } from 'react'
import './styles/Paanakyma.css'
import RavintolaLista from './components/RavintolaLista'
import Logopalkki from './components/Logopalkki'
import { UserAuthContext } from './Contexts';
import { useNavigate } from 'react-router-dom';


export default function Paanakyma(props) {
  const userAuthContextValue = useContext(UserAuthContext);
  let navigate = useNavigate();

  if(userAuthContextValue.jwt != null){
  return (
    <div>
      <Logopalkki/>
    <div className="tausta">
        <RavintolaLista ravintolat = {props.ravintolat} />
    </div>
    </div>
  )
  }
  else{
    navigate("/", { replace: true })
  }
}
