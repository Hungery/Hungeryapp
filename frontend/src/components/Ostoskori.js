import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import Menunakyma from './Menunakyma';
import axios from "axios";


export default function Ostoskori(props) {
    const {cartItems} = props;
    return (
        <aside className="block col-1">
            <h2>Ostoskorissa: </h2> 
            <div>
                {cartItems.length === 0 && <div>Ostoskori on tyhjä</div>}
            </div>
        </aside>
    
    )
}

/*
export default function Ostoskori(props) {
    return (
        <aside className="block col-1">
            <h2>Ostoskorissa: </h2> 
            <div>
                ostoskori
            </div>
        </aside>
    
    )
}
*/