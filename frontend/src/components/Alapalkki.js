import React from 'react'
import Menu from './Menu'
import TuoteItem from './TuoteItem';
import { useState } from 'react';

export default function Alapalkki() {

    const [ tuotteet, setTuotteet ] = useState([
        {
            id: 1,
            title: "Kaljaa",
            description: "Vehnäistä kaljaa tölkistä",
            price: 2.90,
            thumbnail: false,
            isChecked: false,
            qty: 0,
        },
        {
            id: 2,
            title: "Sipsii",
            description: "Estrella grilli sipsi",
            price: 4.90,
            thumbnail: false,
            isChecked: false,
            qty: 0,
        },
    ]);

    const handleItemCheckedToggle = (item) => {
        let newTuotteet = [...tuotteet];
        let itemClickedIndex = newTuotteet.findIndex(i => item.title == i.title);

        if(itemClickedIndex != -1) {
            let newElement = {...newTuotteet[itemClickedIndex]}
            newElement.qty = newElement.qty+1;
            newTuotteet[itemClickedIndex] = newElement;
            setTuotteet(newTuotteet);
        }
    }
    
  return (
    <div className='alapalkki'>
        <div className='ravintolannimi'>RAVINTOLAN NIMI</div>
        <div className='kuva'>RAVINTOLAN KUVA</div>
        <div className='menu'>
        <Menu tuotteet={ tuotteet } itemClickedEvent={ handleItemCheckedToggle }/>
        </div>
    </div>
  )
}
