import React from 'react'
import TuoteItem from './TuoteItem'

export default function Menu(props) {

    

  return (
    <div>
        <div className='menu'>
                { props.tuotteet.map( p => <TuoteItem title={p.title} description={p.description} price={p.price} qty={p.qty}/>) }    
        </div>
    </div>
  )
}
