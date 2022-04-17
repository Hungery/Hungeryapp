import React, {useState, useEffect} from "react";
import axios from "axios";
import Constants from '../Constants.json';

export default function Loppunakyma (props) {
    const {totalPrice, cartItems, setCartItems, tuotteetkpl} = props;
    const[tilaukset, setOrderHistory] = useState([]);
    const[ruoat, setMenuRavintola] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() =>{
      const getMenus = async () => {
        const ruoat = await axios.get('http://localhost:8080/menus')
        setMenuRavintola(ruoat.data);
      }
        getMenus(ruoat);
     }, []);

    const baseURL = 'http://localhost:8080/addorderhistory';

    useEffect(() =>{
     const setOrderHistory = async () => {
       const tilaukset = await axios.get(`${baseURL}`).then((tilaukset) => {
         setOrderHistory(tilaukset.data)
       });
     }
    }, []);

    function putOrderHistory() {
     axios
       .put(`${baseURL}/`, {
         pvm : Date,
         hinta : totalPrice,
         kpl : tuotteetkpl,
         orderhistoryid : tilaukset.orderhistoryid,
         menuid : ruoat.menuid,
         restaurant : ruoat.nimiravintola,
         customer : Constants.SAHKOPOSTI,
       })
       .then((tilaukset) => {
         setPost(tilaukset.data);
       });
   }
 
   if (!post) return "No post!"

    return (
        <main className="block col2">
          <h1> Tilauksesi on tulossa </h1>
          <h3>{post.Date}</h3>
          <h3>{totalPrice}</h3>
          <h3>{tuotteetkpl}</h3>
          <h3>{tilaukset.orderhistoryid}</h3>
          <h3>{ruoat.menuid}</h3>
          <h3>{Constants.SAHKOPOSTI}</h3>
        </main>    
      );
}
