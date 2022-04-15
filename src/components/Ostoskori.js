import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import formatCurrency from '../util';

export default function Ostoskori(props) {

    const {getTotalCost, cartItems} = props;
    const [total, setTotal] = useState([]);

      const pay = (total) => {

          {props.getTotalCost(cartItems)}
          props.setTotal(total);
        

         const today = new Date();
         const date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
         let cart = " ";

          for(let i = 0; i < cartItems.length; i++) {
            let sum = {...cartItems[i]}
            cart = cart +" tuotteita: " + sum.qty + " ";
            cartItems += sum.qty
          }
      }
       

    return (
      <div>
        {cartItems.length !== 0 && (
          <div>
              <div className='ostoskori'>
                  <div className='yhteensa'>
                    <div>
                      Yhteensä:{" "}
                      {total(cartItems)}
                    </div>

                     <button 
                        className='button primary'>
                        Tilaa
                      </button>
                      
                  </div>
              </div>
        </div>
                    )}
      </div>

    )
      /*
      <div>
         <div className='maksa'>

                  <p>{this.props.getTotalCost()} €</p>

          </div>
      </div>
    */
    
  }