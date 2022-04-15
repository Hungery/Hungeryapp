import React from 'react'
import Tuote from './Tuote'

export default function Menu({props, ruoat}) {

  return (
    <div>
          <div className='menu'>
                { props.menus.map( props, index => <Tuote 
                key={index}
                nimiravintola={props.nimiravintola} 
                nimi={props.nimi} 
                kuvaus={props.kuvaus}
                hinta={props.hinta} 
                qty={props.qty}/>) } 
          </div>

          <div className='menu-price'>
              {ruoat.addToCart.map( ruoat, index => <Tuote
              key={index}
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}

              {ruoat.removeFromCart.map( ruoat, index => <Tuote
              key={index}
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}

              {ruoat.cartItems.map( ruoat, index => <Tuote
              key={index}
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}
          </div>

    </div>
  )
}
/*
          <div className='menu-price'>
              {props.addToCart.map( ruoat => <Tuote
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}

              {props.removeFromCart.map( ruoat => <Tuote
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}

              {props.cartItems.map( ruoat => <Tuote
              menuid={ruoat.menuid}
              nimi={ruoat.nimi}
              hinta={ruoat.inta}
              qty={ruoat.qty} />)}
          </div>

*/