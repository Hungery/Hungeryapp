import React from 'react'
import Tuote from './Tuote'

export default function Menu(props) {

  return (
    <div>
        <div className='menu'>
                { props.menus.map( p => <Tuote nimi={p.nimi} nimiravintola={p.nimiravintola} kuvaus={p.kuvaus} hinta={p.hinta} kuva={p.kuva} qty={p.qty}/>) }    
        </div>
    </div>
  )
}
