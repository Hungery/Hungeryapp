import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import React, {useState, useEffect, Fragment, } from "react";
import axios from "axios";


const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [ruoat, setMenuRavintola] = useState([]);

  useEffect(() =>{
    const getMenus = async () => {
      const ruoat = await axios.get('http://localhost:8080/menus')
      setMenuRavintola(ruoat.data);
    }
      getMenus(ruoat);

   }, []);
/*
  const onRemove = (menuid) => {
    const exist = cartItems.find((x) => x.menuid === menuid);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.menuid !== menuid));
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.menuid === menuid ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  };
*/
/*
  const onRemove = (menuid) => {

    const product = {
      menuid : menuid,
      nimi : nimi,
      hinta : hinta,
      qty : 1
    };

    const cartCopy = cartItems.filter((product) => menuid !== product.id);

    setCartItems(cartCopy);
  };

  const decrementCount = (menuid) => {
    const cartCopy = cartItems.slice();

    const index = cartCopy.findIndex((product) => menuid === product.id);

    const pr = cartCopy[index];
    cartCopy[index] = { ...pr, qty: pr.qty - 1 };

    setCartItems(cartCopy);
  };
*/

  const onAdd = (menuid, nimi, hinta) => {
    
            const alreadyInCart = cartItems.find((ruoat) => ruoat.menuid === menuid);
            if (alreadyInCart) {
              setCartItems(
                cartItems.map((ruoat) => 
                ruoat.menuid === menuid 
                ? {...alreadyInCart, qty: alreadyInCart.qty +1}
                : ruoat)
              );
            }
              else {
                setCartItems([...cartItems, {...menuid, nimi, hinta, qty: 1}]);
              }
        };


/*
  const onRemove = (menuid) => {

          const alreadyInCart = cartItems.find((ruoat) => 
          ruoat.menuid === menuid);
    
          if(alreadyInCart.qty === 1) {
            setCartItems(cartItems.filter((ruoat) => 
            ruoat.menuid !== menuid));
    
          } else {
            setCartItems (
              cartItems.map((ruoat) => 
                ruoat.menuid === menuid 
              ? {...alreadyInCart, qty: alreadyInCart.qty -1}
              : ruoat
              )
            );
          }
    
        };
*/
const onRemove = (menuid) => {
  let newCartItems = [...cartItems];
  let ruoat = newCartItems.findIndex(ruoat => ruoat.menuid === menuid);
  let deleteAll = cartItems.findIndex(ruoat => ruoat.menuid === menuid);

    if(ruoat !== -1) {
      let del = {...newCartItems[ruoat]}
      let sub = {...cartItems[deleteAll]}

      if(del.qty <= 1) {
        newCartItems.splice(ruoat, 1);
      } else {
        del.hinta -= sub.hinta;
        del.qty = del.qty-1;
        newCartItems[ruoat] =del;
      }
      setCartItems(newCartItems);
    }

};

  return(
    
    
    <BrowserRouter>
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Routes > 
          <Route path="/menuravintola" element = 
            {<><Menunakyma onAdd={onAdd}/><Ostoskori 
              onAdd={onAdd} 
              onRemove={onRemove} 

              cartItems={cartItems}
            /></>} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/ostoskori" element = 
            { <Ostoskori /> } />
        </Routes>
      </div>
  </div>
  </BrowserRouter>
)
};

export default App

