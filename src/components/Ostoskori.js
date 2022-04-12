import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import formatCurrency from '../util';

export default function Ostoskori(props) {

    const {cartItems, setCartItems} = props;

       const pay = (maksu) => {
         const today = new Date();
         const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;

         let tilaaja = " ";
         let tuotteet = " ";

          for(let i = 0; i < cartItems.length; i++) {
            let summa = {...Ostoskori[i]}
            tilaaja = tilaaja + ", " +summa.nimi +" qty: " + summa.qty + " ";
            tuotteet += summa.qty
          }
       }

    return (
      <div>

      </div>
    )
  }