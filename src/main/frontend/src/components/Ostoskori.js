import React, {useState, useEffect, Component} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import axios from "axios";


export default function Ostoskori(props) {
    //const {cartItems} = props; 
    
    const [cartItems, setCartItems] = useState([]);
  
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