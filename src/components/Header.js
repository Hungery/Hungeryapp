import React from "react";
import '../Ostoskori.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import '../Ostoskori.css'

export default function Header(props) {
    
    const {countCartItems} = props;

    return (
        <header className="row block center">
            <div>
                <a href="/">
                    <h1>Hungery</h1>
                </a>
            </div>
            <div className="reuna">
                <a href="/ostoskori">
                    <ShoppingCartSharpIcon className="icon" fontSize="large"/>{ ' '}
                    {countCartItems ? ( <span className="counter">{countCartItems}</span> ) : ( '')}
                    </a> {''}
                    <a href="/kirjaudu"><button className="button header">Kirjaudu</button></a> 
            </div>
        </header>
    )
}