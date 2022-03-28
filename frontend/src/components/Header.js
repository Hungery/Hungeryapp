import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="header">
            <div>
                <a href="/">
                    <h1>Hungery</h1>
                </a>
            </div>
            <div>
                <a href="/ostoskori"><button className="nappiOstoskori">Ostoskori</button></a> <a href="/kirjaudu"><button className="nappiKirjaudu">Kirjaudu</button></a> 
            </div>
        </header>
    )
}

/*
<Route path="/menuravintola" element = { <Menunakyma /> } />
*/