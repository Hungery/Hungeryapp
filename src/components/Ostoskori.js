import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../Ostoskori.css'
import { LibraryBooksOutlined } from "@mui/icons-material";

export default function Ostoskori(props) {
    const {cartItems, onAdd, onRemove, setCartItems} = props;
    const {totalPrice, tuotteetkpl, itemsPrice, shippingPrice} = props;


    const[ruoat, setMenuRavintola] = useState([]);

    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
  
     }, []);


    return (
      <aside className="block col1">
        <h1> Ostoskori </h1>
        <div>{cartItems.length === 0 && 
          <h2 >Ostoskori on tyhjä </h2>} </div>
          {cartItems.map((ruoat, index) => (
            <div key={index} className="row">
              <div className="col2">{ruoat.nimi}</div>
              <div className="col2">
                <button onClick={() =>onAdd(ruoat.menuid, ruoat.nimi, ruoat.hinta)} className="add">
                  +
                </button>
                <button onClick={() =>onRemove(ruoat.menuid)} className="add">
                  -
                </button>
              </div>
              <div className="col2 text-right"> 
                {ruoat.qty} x {ruoat.hinta} €
              </div>
            </div>
          ))}

        {laskut.map((kori) => (

            {kori.tuotteetkpl !== 0 && (
              <>
              <hr></hr>
              <div>Sinulla on ostoskorissa {tuotteetkpl} kpl tuotteita</div>
              <hr></hr>
              <div className="row">
                <div className="col2">Tuotteiden hinta </div>
                <div className="col1 text-right">{itemsPrice} €</div>
              </div>
              <div className="row">
                <div className="col2">Kuljetusmaksu </div>
                <div className="col1 text-right">{shippingPrice} €</div>
              </div>
              <div className="row">
                <div className="col2">
                  <strong> YHTEENSÄ </strong> 
                </div>
                <div className="col1 text-right">
                  <strong> {totalPrice} €</strong>
                </div>
              </div>
              <Link to="/loppunakyma" 
                totalPrice={totalPrice}
                cartItems={cartItems}
                tuotteetkpl={tuotteetkpl}
              >
              <button>Maksa tuotteesi</button></Link>
              </>
            )}

        )
        )}

        </aside>   
    
    )
    
  }
