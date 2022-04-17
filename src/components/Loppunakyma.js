import React, {useState, useEffect} from "react";
import axios from "axios";
import Constants from '../Constants.json';

export default function Loppunakyma (props) {
    const { cartItems, setCartItems} = props;
    const[tilaukset, setOrderHistory] = useState([]);
    const[ruoat, setMenuRavintola] = useState([]);
    const [post, setPost] = useState([]);

    const itemsPrice = cartItems.reduce((a, c) => a + c.hinta * c.qty, 0);
    const tuotteetkpl = cartItems.reduce((a, c) => a + c.qty, 0);
    const shippingPrice = 5;
    const totalPrice = itemsPrice + shippingPrice;


    const today = new Date();
    const datetime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    

    console.log(datetime);


    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
     }, []);


 
   if (!post) return "No post!"

    return (
        <main className="block col2">
          <h1> Tilauksesi on matkalla... </h1>

          <h3>Hinta: {totalPrice} €</h3>
          <h3>Tilattu: {datetime} </h3>
          <h3>Tuotteita: {tuotteetkpl} kpl</h3>
          <h3>{ruoat.menuid}</h3>
          <h3>Ravintolasta: {Constants.RAVINTOLA}</h3>         
          <h3>Käyttäjälle: {Constants.SAHKOPOSTI}</h3>
        </main>    
      );
}
