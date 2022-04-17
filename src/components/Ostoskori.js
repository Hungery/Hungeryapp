import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../Ostoskori.css'

export default function Ostoskori(props, qty, decrementCount, menuid) {
    const {cartItems, onAdd, onRemove, setCartItems} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.hinta * c.qty, 0);
    const shippingPrice = 5;
    const totalPrice = itemsPrice + shippingPrice;

    const[ruoat, setMenuRavintola] = useState([])

    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
  
     }, []);


    return (
      <aside className="block col1">
        <h1> Ostoskori </h1>
        <div>{cartItems.length === 0 && 
          <h2 >Ostoskori on tyhjä </h2>} </div>
          {cartItems.map((ruoat, index) => (
            <div key={index} className="row">
              <div className="col2">{ruoat.nimi}</div>
              <div className="col2">
                <button onClick={() =>onAdd(ruoat.menuid, ruoat.nimi, ruoat.hinta)} className="add">
                  +
                </button>
                <button onClick={() =>onRemove(ruoat.menuid)} className="add">
                  -
                </button>
              </div>
              <div className="col2 text-right"> 
                {ruoat.qty} x {ruoat.hinta} €
              </div>
            </div>
          ))}


          {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
              <div className="col2">Tuotteiden hinta </div>
              <div className="col1 text-right">{itemsPrice} €</div>
            </div>
            <div className="row">
              <div className="col2">Kuljetusmaksu </div>
              <div className="col1 text-right">{shippingPrice} €</div>
            </div>
            <div className="row">
              <div className="col2">
                <strong> YHTEENSÄ </strong> 
              </div>
              <div className="col1 text-right">
                <strong> {totalPrice} €</strong>
              </div>
            </div>
            </>

          )}

        </aside>   
    
    )
    
  }
