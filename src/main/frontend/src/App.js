import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Ostoskori from './components/Ostoskori';
import Menunakyma from './components/Menunakyma';
import React, {useState, useEffect} from "react";


const App = (props) => {
  
  const {cartItems, onAdd} = props;
 
  return(
  <BrowserRouter>
  <div className="App">
    <Header></Header>
    <div className="row">
      <Routes> 
        <Route path="/menuravintola" element = { <Menunakyma>onAdd={onAdd}</Menunakyma> } />
      </Routes>
      <Ostoskori onAdd={onAdd} cartItems={cartItems}></Ostoskori>
    </div>
    <div>
      <Routes>
        <Route path="/ostoskori" element = { <Ostoskori /> } />
      </Routes>
    </div>
  </div>
  </BrowserRouter>
  )
}

export default App


/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: []
    };
  }

  addToCart=(menu) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if(item.menuid === menu.menuid) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cartItems.push({...menu, count: 1});
    }
    this.setState({cartItems});
  };

  return(
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="row">
          <Routes> 
            <Route path="/menuravintola" element = { <Menunakyma addToCart={this.addToCart}></Menunakyma> } />
          </Routes>
          { <Ostoskori cartItems={this.state.cartItems}/>}
        </div>
        <div>
          <Routes>
            <Route path="/ostoskori" element = { <Ostoskori/>} />
  
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
};
  
  export default App
*/

/*
lenght
const App = (props) => {
  
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