import LoginView from './LoginView';
import LoginViewRestaurant from './LoginViewRestaurant';
import SignupView from './SignupView';
import SignupViewRestaurant from './SignupViewRestaurant';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { UserAuthContext } from './Contexts';
import Home from './Home';
import axios from 'axios';
import Constants from './Constants.json';
import Paanakyma from './Paanakyma';
import Ravintolanakyma from './Menu';
import Orderhistory from './Orderhistory';
import Orderhistoryrestaurant from './Orderhistoryrestaurant';
import RavintolaMuokkaus from './RavintolaMuokkaus';
import KayttajaMuokkaus from './KayttajaMuokkaus'
import MenuLuonti from './MenuLuonti.js'

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {
  const userAuthContextValue = useContext(UserAuthContext);
  const [ravintolat, setRavintolat] = useState([]);
  
  useEffect(() =>{
    const getRestaurants = async () => {
      const raflat = await axios.get(Constants.API_ADDRESS + "/ravintolat")

      setRavintolat(raflat.data);
      console.log(raflat.data);

    }
      getRestaurants();
   }, []);
console.log(ravintolat);

const [ menus, setMenus ] = useState([]);

  useEffect(() =>{
    const getMenus = async () => {
      const menut = await axios.get(Constants.API_ADDRESS + "/menus")

      setMenus(menut.data);
    }

      getMenus();

   }, []);
   
   const [ orders, setOrders ] = useState([]);

  useEffect(() =>{
    const getOrders = async () => {
      const orderit = await axios.get(Constants.API_ADDRESS + "/orders" )
      setOrders(orderit.data);
      console.log(orderit.data);
    }

      getOrders();

   }, []);

  const initialAuthData = {
    jwt: jwtFromStorage,
    login: (newValueForJwt) => {
      const newAuthData = { ...userAuthData,
          jwt: newValueForJwt
        };
      window.localStorage.setItem('appAuthData', newValueForJwt);
      setUserAuthData(newAuthData);
    },
    logout: () => {
      const clearemail = "Odotetaan sisäänkirjautumista";
      Constants.SAHKOPOSTI = clearemail;
      window.localStorage.removeItem('appAuthData');
      setUserAuthData({...initialAuthData});
    }
  };
  
  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});
  console.log(Constants.SAHKOPOSTI);
  return (
    <UserAuthContext.Provider value={ userAuthData }>
      <UserAuthContext.Consumer>
      { value => (<div>Auth status: { value.jwt != null ? "Logged in": "Not logged in" }</div>) }
      </UserAuthContext.Consumer>
      <div>Kirjautunut käyttäjä:<a>{Constants.SAHKOPOSTI}</a></div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <LoginView /> } />
            <Route path="/signup" element={ <SignupView /> } />
            <Route path="/signupRestaurant" element={ <SignupViewRestaurant /> } />
            <Route path="/loginRestaurant" element={ <LoginViewRestaurant /> } />
            <Route path="/paanakyma" element={ <Paanakyma ravintolat={ravintolat}/> } />
            <Route path="/ravintolanakyma" element={ <Ravintolanakyma menus={menus}/> } />
            <Route path="/orderhistory" element={ <Orderhistory orders={orders}/> } />
            <Route path="/orderhistoryrestaurant" element={ <Orderhistoryrestaurant orders={orders}/> } />
            <Route path="/ravintolat/:sahkoposti" element = { <RavintolaMuokkaus/> }/>
            <Route path="/kayttaja/:sahkoposti" element = { <KayttajaMuokkaus/> }/>
            <Route path="/menu" element = { <MenuLuonti/> }/>
        </Routes>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

export default App;
