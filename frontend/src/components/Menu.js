import React from 'react'
import Tuote from './Tuote'

export default function Menu(props) {

  return (
    <div>
        <div className='menu'>
                { props.tuotteet.map( p => <Tuote title={p.title} description={p.description} price={p.price} qty={p.qty}/>) }    
        </div>
    </div>
  )
}
