import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import formatCurrency from '../util';

export default class Cart extends Component {
  render() {
      const {cartItems} = this.props;
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
                        {cartItems.map((item) => (
                            <li key={item.menuid}>
                                <div>
                                    <img src={item.kuva} alt={item.nimi}></img>
                                </div>
                                <div>
                                    <div>{item.nimi}</div>
                                    <div className='right'>
                                        {formatCurrency(item.hinta)} x {item.count} {" "}
                                        <button
                                            className='button'
                                            onClick={() => this.props.removeFromCart(item)}>
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
                                    {formatCurrency(
                                    cartItems.reduce((a,c) => a + c.hinta + c.count, 0)
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
    );
  }
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