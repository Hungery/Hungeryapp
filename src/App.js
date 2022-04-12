import LoginView from './LoginView';
import LoginViewRestaurant from './LoginViewRestaurant';
import SignupView from './SignupView';
import SignupViewRestaurant from './SignupViewRestaurant';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { UserAuthContext } from './Contexts';
import Home from './Home';
import axios from 'axios';
import Constants from './Constants.json';
import Paanakyma from './Paanakyma';
import Ravintolanakyma from './Menu';

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
      const menut = await axios.get('http://localhost:8080/menus')

      setMenus(menut.data);
    }

      getMenus();

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
      window.localStorage.removeItem('appAuthData');
      setUserAuthData({...initialAuthData});
    }
  };
  
  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});

  return (
    <UserAuthContext.Provider value={ userAuthData }>
      <UserAuthContext.Consumer>
      { value => (<div>Auth status: { value.jwt != null ? "Logged in": "Not logged in" }</div>) }
      </UserAuthContext.Consumer>
     
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <LoginView /> } />
            <Route path="/signup" element={ <SignupView /> } />
            <Route path="/signupRestaurant" element={ <SignupViewRestaurant /> } />
            <Route path="/loginRestaurant" element={ <LoginViewRestaurant /> } />
            <Route path="/paanakyma" element={ <Paanakyma ravintolat={ravintolat}/> } />
            <Route path="/ravintolanakyma" element={ <Ravintolanakyma menus={menus}/> } />
        </Routes>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

export default App;
