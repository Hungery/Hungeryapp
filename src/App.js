import './styles/App.css';
import LoginView from './LoginView';
import ProtectedView from './ProtectedView';
import SignupView from './SignupView';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UserAuthContext } from './Contexts';
import Logopalkki from './components/Logopalkki'

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

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

  let authRoutes = <>
            <Route path="/login" element={ <LoginView /> } />
            <Route path="/signup" element={ <SignupView /> } />
          </>

  if(userAuthData.jwt) {
    authRoutes = <Route path="/protected" element={ <ProtectedView /> }/>
  }

  return (
    <UserAuthContext.Provider value={ userAuthData }>

      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          {
            authRoutes
          }
          <Route path="*" element={<LoginView />} />

        </Routes>
      </BrowserRouter>
    </UserAuthContext.Provider>
  );
}

export default App;
