import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu'
import { BrowserRouter, Link } from 'react-router-dom';

function Ravintolanakyma() {


   return (
    <div className="App">
        <div>
        <Menu menus={ menus } />
        </div>
    </div>
  );
}

export default Ravintolanakyma;