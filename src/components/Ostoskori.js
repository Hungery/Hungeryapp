import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import formatCurrency from '../util';

export default function Ostoskori(props) {

    const [total, setTotal] = useState([]);
    const {cartItems, setCartItems} = props;

      const removeFromCart = (menuid) => {
            
        const deleted = cartItems.filter((cart) => cart.menuid !== menuid);
        setCartItems(deleted);
        setTotal(cartItems.length - 1);
       
        
        console.log ("Total of items: ", total);
       };

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
                                    {(cartItems.reduce((a,c) => a + c.hinta + c.qty, 0)
                                    )}
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

/*
export default function Ostoskori() {
   
   //const [cartItems, setCartItems] = useState([]);
/*
   const [Ostoskori, setCartItems] = useState([]);
  
    const onAdd = (menu) => {
    const exist = cartItems.find((x) => x.menuid === menu.menuid)
    if(exist) {
        setCartItems(
            cartItems.map((x) =>  
                x.menuid === menu.menuid ? {...exist, qty: exist.qty +1} : x
            )
        );
    } else {
        setCartItems([...cartItems, {...menu, qty: 1 }]);
    }
    };

    return (
        <aside className="block col-1">
            <h2>Ostoskorissa: </h2> 
            <div>
            {cartItems.length === 0 && <div>Ostoskori on tyhjä</div>}
            </div>
        </aside>
    
    )
}

/*
export default function Ostoskori(props) {
    const {cartItems} = props;
    return (
        <aside className="block col-1">
            <h2>Ostoskorissa: </h2> 
            <div>
                {cartItems.length === 0 && <div>Ostoskori on tyhjä</div>}
            </div>
        </aside>
    
    )
    <Ostoskori></Ostoskori>
}
/*
export default function Ostoskori(props) {
    return (
        <aside className="block col-1">
            <h2>Ostoskorissa: </h2> 
            <div>
                ostoskori
            </div>
        </aside>
    
    )
}
*/


/*
export default class Ostoskori extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.lenght === 0? (
                <div className="cart">Ostoskori on tyhjä</div>
            ) : (
                <div className="cart">
                    Sinulla on {cartItems.lenght} tuotetta ostoskorissa {" "}
                    </div>
            )}
            </div>
        );
    }
}


*/