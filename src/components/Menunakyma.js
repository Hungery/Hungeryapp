import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import '../Ostoskori.css'
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