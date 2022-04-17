import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import Loppunakyma from './components/Loppunakyma';
import React, {useState, useEffect} from "react";
import axios from "axios";


const App = (props) => {
  const {totalPrice, tuotteetkpl, itemsPrice, shippingPrice} = props;

  

  const [cartItems, setCartItems] = useState([]);
  const [ruoat, setMenuRavintola] = useState([]);

  useEffect(() =>{
    const getMenus = async () => {
      const ruoat = await axios.get('http://localhost:8080/menus')
      setMenuRavintola(ruoat.data);
    }
      getMenus(ruoat);

   }, []);


const onRemove = (menuid) => {
  const newCartItems = [...cartItems];
  const ruoat = newCartItems.findIndex(cart => cart.menuid === menuid);

    if(ruoat !== -1) {
      const remove = {...newCartItems[ruoat]}
      if(remove.qty <= 1) {
        newCartItems.splice(ruoat, 1);
      } else {
        remove.qty = remove.qty-1;
        newCartItems[ruoat] = remove;
      }
      setCartItems(newCartItems);
    }
};
const onAdd = (menuid,nimi,hinta) => { 
  let newCartItems = [...cartItems]
  let ruoat = newCartItems.findIndex(cart => cart.menuid === menuid)
  if(ruoat === -1){
    newCartItems = [...cartItems, {
      menuid : menuid,
      qty : 1,
      nimi : nimi,
      hinta : hinta
    }]; setCartItems(newCartItems);
  } else { 
    let additions = {...newCartItems[ruoat]}
      additions.qty = additions.qty+1;
      newCartItems[ruoat] = additions;
      setCartItems(newCartItems);
  }
}
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
              setCartItems={setCartItems}
              
            /></>} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/ostoskori" element = 
            { <Ostoskori 
              onAdd={onAdd} 
              onRemove={onRemove} 
              cartItems={cartItems}
              totalPrice={totalPrice}
              tuotteetkpl={tuotteetkpl}
              itemsPrice={itemsPrice}
              shippingPrice={shippingPrice}

            /> } />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/loppunakyma" element = 
            { <Loppunakyma 
              totalPrice={totalPrice}
              cartItems={cartItems}
              tuotteetkpl={tuotteetkpl}
            /> } />
        </Routes>
      </div>
  </div>
  </BrowserRouter>
)
};

export default App

