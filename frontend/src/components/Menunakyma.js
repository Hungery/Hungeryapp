import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Ostoskori from "./Ostoskori";

const MenuRavintola = (props) => {
  const[menut, setMenuRavintola] = useState([])

  const fetchMenuRavintola = ( ) => {
    axios.get("http://localhost:8080/menus").then(res => {
      console.log(res);
      setMenuRavintola(res.data)
    });
  }

  useEffect(() => {
    fetchMenuRavintola();
  }, []);

  //const [cartItems, setCartItems] = useState([])
/*
  const onAdd = (menu) => {
    const exist = cartItems.find(x => x.id === menu.id)
    if(exist) {
      setCartItems(
        cartItems.map(x => 
          x.id === menu.id ? {...exist, qty: exist.qty +1} : x
          )
      );
    } else {
      setCartItems([...cartItems, {...menu, qty: 1 }]);
    }
  };
*/

  return menut.map((menu, menut) => {
    const {onAdd} = props;
    return (
      <main className="tuotteet">
      <div key={menut}>
        <h3>{menu.nimiravintola}</h3>
        <h4>{menu.nimi}</h4>
        <h4>{menu.tuotekategoria}</h4>
        <h4>{menu.kuvaus}</h4>
        <h4>{menu.hinta} €</h4>
        <h4>{menu.id}</h4>
        <button onClick={onAdd}> Osta</button>
      </div>
      </main>);
  })
};


export default function Menunakyma(props) {

  return(
    <main className="block col-2">
      <h2>Ruoat: </h2> 
      <div className="row">
        <MenuRavintola > </MenuRavintola>
      </div>
    </main>
  )
}