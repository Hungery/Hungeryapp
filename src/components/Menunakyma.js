import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import '../Ostoskori.css'
import formatCurrency from "../util";
import Ostoskori from "./Ostoskori";
import data from '../data.json';
import axios from "axios";
  
  export default function Menunakyma(props) {
    const {onAdd} = props;
    const [cartItems, setCartItems] = useState([]);
    const[ruoat, setMenuRavintola] = useState([])

    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
  
     }, []);

/*
      const [cartItems, setCartItems, ruoat] = useState([]);
      const onAdd = (menuid, nimi, hinta) => {

/*
        let cart = [...cartItems, {
          menuid : menuid,
          nimi : nimi,
          hinta : hinta,
          qty : 1
        }];
*/

/*
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
    const removeFromCart = (menuid, nimi, hinta) => {

/*
      let cart = [...cartItems, {
        menuid : menuid,
        nimi : nimi,
        hinta : hinta,
        qty : 1
      }];
*/
/*

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

      const getTotalCost = (cartItems) => {
        return cartItems.reduce((totalCost, { hinta: hinta }) => totalCost + parseFloat(hinta), 0);
      }
*/

return (

    <main className="block col2">
      <h1> Ruoat </h1>
        <div className="row">
          { ruoat.map((ruoat) => (
          <div key={ruoat.menuid}>
            <div className="menu">
              <a
                href={"#" + ruoat.menuid}>
                <h2>{ruoat.nimiravintola}</h2>
                <img className="small" src={data.kuva} alt={data.menuid}></img>
                <h3>{ruoat.nimi}</h3>
                <div>{ruoat.kuvaus}</div>
              </a>
              <div className="menu-price">
                <div>{ruoat.hinta} € </div>
                <button 
                  onClick={() =>onAdd(ruoat.menuid, ruoat.nimi, ruoat.hinta)}
                    className="button primary">
                      Liää ostoskoriin
                </button>

              </div>
            </div>
          </div>
            )
          )
          }
        </div>
    </main>    
  )
}
//ostoskori
/*
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
              {cartItems.map((ruoat, index) => (
                <li key={index}>
                  <div>
                    <div>{ruoat.nimi}</div>
                    <div className='right'>
                      {(ruoat.hinta)} € {" "}
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
                <div>
                  <Link to="/ostoskori"><button
                    className='button primary'
                      onClick={() => ruoat.getTotalCost(cartItems)}>
                        Jatka maksamaan </button>
                  </Link>
                </div>
              </div>
            </div>
            )}
        </div>



  /*       const addToCart = (menuid, nimi, hinta) => {
        
        let cart = [...cartItems, {
          menuid : menuid,
          nimi : nimi,
          hinta : hinta,
          count : 1
        }];
        

        let alreadyInCart = false;
        cartItems.forEach((ruoat) => {
          if(ruoat.menuid === cart.menuid) {
            ruoat.count++;
            alreadyInCart = true;
          }
        });
          if(!alreadyInCart) {
            cartItems.push({...cart, count: 1});
        }
          
        setCartItems(cart);
      }


      
      addToCart = (menu) => {
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
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

 */
  
/*

class Menunakyma extends Component {
  constructor (props) {
    super(props)
    this.getTotalCost = this.getTotalCost.bind(this)
  }
  
  handleMenu () {
    
    axios.get("http://localhost:8080/menus")
    .then((response) =>{
      const data = response.data;
      this.setState({menus: data});
      console.log('state', this.state);
    })
    .catch(()=>{
      alert('error retrieving data');
    });
  }
  
  componentDidMount = () =>{
    this.getArticles();
  }
  */

  /*
  <div>
  <ul className="menus">
  {this.props.menus.map((menu) => (
      <li key={menu.menuid}>
          <div className="menu">
              <a
              href={"#" + menu.menuid}
              >
              <div>{menu.nimiravintola}</div>
              <img src={menu.kuva} alt={menu.nimi}></img>
              <p>{menu.nimi}</p>
              <div>{menu.kuvaus}</div>
              </a>
              <div className="menu-price">
              <div>{menu.hinta}</div>
              <button 
                  onClick={() => this.props.addToCart(menu)} 
                  className="button primary">
                  Lisää ostoskoriin
              </button>
              </div>
          </div>
      </li>
      ))}
</ul>
</div>
*/