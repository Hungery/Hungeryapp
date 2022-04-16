import React from 'react'
import Tuote from './components/Tuote'
import Constants from './Constants'
import Logopalkkimenu from './components/Logopalkkimenu'


export default function Menu(props) {

  console.log(Constants.RAVINTOLA);

  const filteredRestaurants= props.menus.filter(menus =>
    menus.nimiravintola.includes(Constants.RAVINTOLA));
    console.log(filteredRestaurants);
    
  return (
    <div>
      <Logopalkkimenu/>
        <div className='menu'>
                { filteredRestaurants.map( p => <Tuote nimi={p.nimi} nimiravintola={p.nimiravintola} kuvaus={p.kuvaus} hinta={p.hinta} kuva={p.kuva} />) }    
        </div>
    </div>
  )
}