import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import formatCurrency from "../util";
import Ostoskori from "./Ostoskori";

  
  export default function Menunakyma() {

      const url = "http://localhost:8080/menus"
      const[ruoat, setMenuRavintola] = useState([])

      useEffect(async() => {
        const menu = await 
        fetch(url).then((res) =>
        res.json())
        setMenuRavintola(menu);
      }, []);

      const [cartItems, setCartItems] = useState([]);
      const [total, setTotal] = useState([]);

      const addToCart = (menuid, nimi, hinta) => {

        let cart = [...cartItems, {
          menuid : menuid,
          nimi : nimi,
          hinta : hinta,
          qty : 1
        }];

        let alreadyInCart = false;
        cartItems.forEach((ruoat) => {
          if(ruoat.menuid === cart.menuid) {
            ruoat.qty++;
            alreadyInCart = true;
          }
        });
          if(!alreadyInCart) {
            cartItems.push({...cart, qty: 1});
        }
          
        setCartItems(cart);
      }

      const removeFromCart = (menuid) => {
            
        const deleted = cartItems.filter((cart) => cart.menuid !== menuid);
          setCartItems(deleted);
          setTotal(cartItems.length - 1);
       
        
        console.log ("Total of items: ", total);
       };

       const getTotalCost = (cartItems) => {
        return cartItems.reduce((totalCost, { hinta: hinta }) => totalCost + parseFloat(hinta), 0);
      }

return (
          <div>
                <ul className="menus">

                    {ruoat.map(ruoat => (
                        <li key={ruoat.menuid}>
                            <div className="menu">
                                <a
                                href={"#" + ruoat.menuid}
                                >
                                <div>{ruoat.nimiravintola}</div>
                                <p>{ruoat.nimi}</p>
                                <div>{ruoat.kuvaus}</div>
                                </a>
                                <div className="menu-price">
                                <div>{(ruoat.hinta)} €</div>
                                <button 
                                    onClick={() => addToCart(ruoat.menuid, ruoat.nimi, ruoat.hinta, ruoat.qty)} 
                                    className="button primary">
                                    Lisää ostoskoriin
                                </button>
                                </div>
                            </div>
                        </li>
                        ))}
                </ul>

                
                  {cartItems.length === 0 ? (
                    <div className='ostoskori ostoskori-header'>Ostoskori on tyhjä </div>
                  ) : (
                    <div className='ostoskori ostoskori-header'>
                        Sinulla on {cartItems.length} tuotetta ostoskorissa{" "}
                  </div>
                    )}

                    <div>
                      <div className='ostoskori'>
                          <ul className='cart-items'>
                              {cartItems.map((ruoat) => (
                                  <li key={ruoat.menuid}>
                                      <div>
                                          <div>{ruoat.nimi}</div>
                                          <div className='right'>
                                              {(ruoat.hinta)} € x {ruoat.qty} {" "}
                                              <button
                                                  className='button'
                                                  onClick={() => removeFromCart(ruoat.menuid)}>
                                                  Poista
                                              </button>
                                          </div>
                                      </div>   
                                                              
                                  </li>
                              ))}
                          </ul>
                      </div>
                      {cartItems.length !== 0 && (
                        <div className='ostoskori'>
                            <div className='yhteensa'>
                                <div>
                                    Yhteensä:{" "}
                                    {getTotalCost(cartItems)} {" €"}
                                </div>
                                <button className='button primary'>
                                    Jatka maksamaan
                                </button>
                            </div>
                        </div>
                      )}
                </div>
          </div>
        )
  }