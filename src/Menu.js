import React from 'react'
import Tuote from './components/Tuote'
import Constants from './Constants'
import Logopalkkimenu from './components/Logopalkkimenu'
import './styles/Tuote.css'


export default function Menu(props) {

  console.log(Constants.RAVINTOLA);

  const filteredRestaurants= props.menus.filter(menus =>
    menus.nimiravintola.includes(Constants.RAVINTOLA));
    console.log(filteredRestaurants);
    
  return (
    <div>
      <Logopalkkimenu/>
        <div className='menu' >
          <div className='ravintolannimi'>{ Constants.RAVINTOLA }</div>
          <div className='kuva'>kuva</div>
          { filteredRestaurants.map( p => <Tuote nimi={p.nimi} nimiravintola={p.nimiravintola} kuvaus={p.kuvaus} hinta={p.hinta} kuva={p.kuva} />) }    
        </div>
    </div>
  )
}