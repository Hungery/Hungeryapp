import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Buttonsorderhistory from './Buttonsorderhisotry'
import _ from 'lodash'
import Constants from '../Constants.json';


export default function Orderhistorylist(props) {
    const [orders, setOrders] = useState(props.orders)
    const [showAll, setShowAll] = useState(true)
    const [newNote2, setNewNote2] = useState('' )
    console.log(props.orders)

    const handleNoteChange2 = (event) => {
        console.log(event.target.value)
        setNewNote2(event.target.value)
      }

    //  console.log(Orders)
    const OrdersToShow = showAll
    ? orders
    : orders.filter(note => note.orderhistoryid.toLowerCase().includes(newNote2) || note.orderhistoryid.toUpperCase().includes(newNote2))
  

    //Tässä pieni funktio, jolla hoidetaan nappien fillteröinti ominaisuus
    //Tämä lähtetetään propseina Buttons komponentille
    const filterItem = (curcat) => {
      const newItem = props.orders.filter((newVal) => {
        return newVal.tyyppi === curcat; 
            // comparing category for displaying data
      });
      setOrders(newItem);
    };
    console.log(props.orders)

    //Tässä ravintolalistasta otetaan talteen muuttujaan ravintoloiden tyypit,
    // jotka laitetaan nappien nimiksi
    const orderCustomers = [...new Set(props.orders.map((Val) => Val.tyyppi))];
    console.log(props.orders)

    const filteredOrders = OrdersToShow.filter(order =>
      order.customer.toLowerCase().includes(Constants.SAHKOPOSTI));
    

  return (
    <div>
        <div className="filtteriPalkki">
        <Buttonsorderhistory  setOrders ={setOrders} filterItem = {filterItem} orderCustomers = {orderCustomers} orders = {props.orders}/>
        </div>
        <div className="historytitle">Tässä näkymässä näet tilaushistoriasi</div>
        <div className="ravintolaElement">
        { filteredOrders.map(orders =>
            <div key = {orders.orderhistoryid} className="ravintolaListaElement" >
                <div><span className="orderid">Tilauksen ID: {orders.orderhistoryid}</span></div>
                <div> <span className="orderlist">Päivämäärä: {orders.pvm} </span> </div>
                <div> <span className="orderlist">Ravintolan sähköposti: {orders.restaurant} </span> </div>
                <div> <span className="orderlist">Tilaajan sähköposti: {orders.customer} </span> </div>
                <div> <span className="orderlist">Tuotteiden määrä: {orders.kpl} kpl </span> </div>
                <div> <span className="orderlist">Hinta: {orders.hinta}€ </span> </div>

            </div>
            )} 
        </div> 
    </div>
  )
}


/* alkuperäinen napi järjestys
<div className="filtteriPalkkiElementti">
         <button className="nappi">Asian</button> 
         <button className="nappi">Mexican</button>
         <button className="nappi">American</button>  
         </div>  */