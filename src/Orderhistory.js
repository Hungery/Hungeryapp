import React, { useContext } from 'react'
import './styles/Orderhistory.css'
import Orderhistorylist from './components/Orderhistorylist'
import Logopalkkiorders from './components/Logopalkkiorders'
import { UserAuthContext } from './Contexts';
import { useNavigate } from 'react-router-dom';


export default function Orderhistory(props) {
  const userAuthContextValue = useContext(UserAuthContext);
  let navigate = useNavigate();

  if(userAuthContextValue.jwt != null){
  return (
    <div>
      <Logopalkkiorders/>
    <div className="taust">
        <Orderhistorylist orders = {props.orders} />
    </div>
    </div>
  )
  }
  else{
    navigate("/", { replace: true })
  }
}
