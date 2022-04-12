import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu'
import { BrowserRouter, Link } from 'react-router-dom';

function Ravintolanakyma() {


   return (
    <BrowserRouter>
    <div className="App">
      
        <div>
        <Menu menus={ menus } />
        </div>
    </div>
    </BrowserRouter>
  );
}

export default Ravintolanakyma;