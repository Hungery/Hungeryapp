import React from 'react'
import Tuote from './components/Tuote'
import { Link } from 'react-router-dom';


export default function Menu(props) {
    
  return (
    <div>
      <div className='yläpalkki'>
      <Link to="/paanakyma"><button className='edellinenbtn'>edellinen</button></Link>
      <div className='header'>HUNGERY</div>
        <Link to="/ostoskori"><button className='ruokakoribtn'>ostoskori</button></Link>
      </div>
        <div className='menu'>
                { props.menus.map( p => <Tuote nimi={p.nimi} nimiravintola={p.nimiravintola} kuvaus={p.kuvaus} hinta={p.hinta} kuva={p.kuva} qty={p.qty}/>) }    
        </div>
    </div>
  )
}