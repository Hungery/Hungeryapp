import React, { useContext } from 'react'
import './styles/Orderhistory.css'
import Orderhistorylistrestaurant from './components/Orderhistorylistrestaurant'
import Logopalkkiordersrestaurant from './components/Logopalkkiordersrestaurant'
import { UserAuthContext } from './Contexts';
import { useNavigate } from 'react-router-dom';


export default function Orderhistoryrestaurant(props) {
  const userAuthContextValue = useContext(UserAuthContext);
  let navigate = useNavigate();

  if(userAuthContextValue.jwt != null){
  return (
    <div>
      <Logopalkkiordersrestaurant/>
    <div className="taust">
        <Orderhistorylistrestaurant orders = {props.orders} />
    </div>
    </div>
  )
  }
  else{
    navigate("/", { replace: true })
  }
}
