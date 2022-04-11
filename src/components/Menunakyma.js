import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import Ostoskori from "./Ostoskori";
import formatCurrency from "../util";

  
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
            ruoat.count++;
            alreadyInCart = true;
          } setCartItems(cartItems)
        });
          if(!alreadyInCart) {
            cartItems.push({...cart, count: 1});
        }
        setCartItems(cart);
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
                                    onClick={() => addToCart(ruoat.menuid, ruoat.nimi, ruoat.hinta)} 
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
                                              {(ruoat.hinta)} x {ruoat.count} {" "}
                                              <button
                                                  className='button'
                                                  onClick={() => this.props.removeFromCart(ruoat)}>
                                                  Poista
                                              </button>
                                          </div>
                                      </div>   
                                                              
                                  </li>
                              ))}
                          </ul>
                      </div>


            </div>
                



          </div>


        )

  }
  /*
    return(
      <main className="block col-2">
        <h2>Ruoat: </h2> 
        <div className="row">
          <MenuRavintola ></MenuRavintola>
        </div>
      </main>
    )
  }
  */
  

/*
  return menu.map((menu) => {
    
    const ostoskori = Ostoskori;
    const [cartItems, setCartItems] = useState([]);
    
    //const onadd = Ostoskori.onAdd;
    //const {onadd, ostoskori} = props;

    return (
      <main className="tuotteet">
      <div key={menu.menuid}>
        <h3>{menu.nimiravintola}</h3>
        <h4>{menu.nimi}</h4>
        <h4>{menu.tuotekategoria}</h4>
        <h4>{menu.kuvaus}</h4>
        <h4>{menu.hinta} €</h4>
        <button> Osta</button>
      </div>
      </main>);
  })
};
*/

//<button onClick={() => ostoskori.onAdd(ostoskori.setCartItems)}  > Osta</button>

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

  */