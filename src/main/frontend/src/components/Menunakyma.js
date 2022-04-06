import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Ostoskori from "./Ostoskori";

const MenuRavintola = (props) => {
  const[menu, setMenuRavintola] = useState([])

  const fetchMenuRavintola = ( ) => {
    axios.get("http://localhost:8080/menus").then(res => {
      console.log(res);
      setMenuRavintola(res.data)
    });
  }

  useEffect(() => {
    fetchMenuRavintola();
  }, []);

  return menu.map((menu) => {
    const {onAdd} = props;
    return (
      <main className="tuotteet">
      <div key={menu.menuid}>
        <h3>{menu.nimiravintola}</h3>
        <h4>{menu.nimi}</h4>
        <h4>{menu.tuotekategoria}</h4>
        <h4>{menu.kuvaus}</h4>
        <h4>{menu.hinta} €</h4>
        <button onClick={onAdd}> Osta</button>
      </div>
      </main>);
  })
};

export default function Menunakyma(props) {
  const {cartItems, onAdd} = props;

  return(
    <main className="block col-2">
      <h2>Ruoat: </h2> 
      <div className="row">
        <MenuRavintola ></MenuRavintola>
      </div>
    </main>
  )
}

/*
return menut.map((menu, menut) => {
    const {onAdd} = props;
    return (
      <main className="tuotteet">
      <div key={menut} menu={menu}>
        <h3>{menu.nimiravintola}</h3>
        <h4>{menu.nimi}</h4>
        <h4>{menu.tuotekategoria}</h4>
        <h4>{menu.kuvaus}</h4>
        <h4>{menu.hinta} €</h4>
        <h4>{menu.menuid}</h4>

        <button onClick={() => this.props.addToCart(menu)}
         className="ostabtn"> 
         Osta
         </button>

      </div>
      </main>);
  })
};
*/
  /*
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

  useEffect(() => {
    onAdd();
  }, []);
*/