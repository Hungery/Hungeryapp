import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../Ostoskori.css'
import Constants from '../Constants.json';
import { useNavigate } from "react-router-dom";

export default function Ostoskori(props) {
  const today = new Date();
  const datetime = today.getFullYear() + '-' + '0'+(today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let navigate = useNavigate();
    const {cartItems, onAdd, onRemove, setCartItems} = props;
    const[tilaukset, setOrderHistory] = useState([]);
    const [ signupProcessState, setSignupProcessState ] = useState("idle");

      const itemsPrice = cartItems.reduce((a, c) => a + c.hinta * c.qty, 0);
      const tuotteetkpl = cartItems.reduce((a, c) => a + c.qty, 0);
      const shippingPrice = 5;
      const totalPrice = itemsPrice + shippingPrice;

      Constants.KPL = tuotteetkpl;
      Constants.HINTA = totalPrice;
      Constants.PVM = datetime;

      console.log(datetime);
      console.log(totalPrice);
      console.log(tuotteetkpl);
      console.log(Constants.RAVINTOLA);
      console.log(Constants.SAHKOPOSTI);
      
    const[ruoat, setMenuRavintola] = useState([]);

    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
  
     }, []);

     const putOrderHistory = async (event) => {
      event.preventDefault();
      setOrderHistory("processing");
      try {
        const result = await axios.post(Constants.API_ADDRESS + '/addorderhistory', {
          pvm: datetime, 
          hinta: totalPrice, 
          kpl: tuotteetkpl, 
          restaurant: Constants.SAHKOPOSTIRAV, 
          customer: Constants.SAHKOPOSTI
        });
        console.log(result);
        setOrderHistory("success");
        setTimeout(() => {
          setOrderHistory("idle")
          navigate("/loppunakyma",
           { replace: true });
        }, 1500);
      } catch (error) {
        console.error(error);
        setOrderHistory("error");
        setTimeout(() => setOrderHistory("idle"), 1500);

      }
    };

    console.log(datetime);

    let signupUIControls = null;
    switch(signupProcessState) {
      case "idle":
        signupUIControls = <button className="signupbutton" type="submit">Maksa tilaus</button>
        break;
  
      case "processing":
        signupUIControls = <span style={{color: 'blue'}}>Lähetetään tilausta...</span>
        break;
  
      case "success":
        signupUIControls = <span style={{color: 'green'}}>Tilaus lähetetty</span>
        break;
  
      case "error":
        signupUIControls = <span style={{color: 'red'}}>Tilauksen luonti epäonnistui</span>
        break;
  
      default:
        signupUIControls = <button className="signupbutton" type="submit">Maksa tilaus</button>
    }


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

            {cartItems.length !== 0 && (
              <>
              <hr></hr>
              <div>Sinulla on ostoskorissa {tuotteetkpl} kpl tuotteita</div>
              <hr></hr>
              <form onSubmit={putOrderHistory}>
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


              

              
              <div>{signupUIControls}</div>
              </form>



              </>
            )}



        </aside>   
    
    )
    
  }
