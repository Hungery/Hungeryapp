import React, { useState } from 'react'
import '../styles/Tuote.css'
export default function Tuote(props) {

  const [count, setCount] = useState(0);

  if (count < 0) {

  }

  return (
    <div className='menu'>

      <div className='alapalkki'>
      
        <div className='Tuote'>

        <div className='tuoteleft'>
          <div className='tuoteleft2'>
          <button type="button" className='button2' onClick={ ()=> setCount(count+1) }>+</button>
          <div className='count'> &nbsp;{ count }&nbsp; </div>
          <button type="button" className='button2' onClick={ ()=> setCount(count-1) }>-</button>
          </div>
          <div className='tuoteleft1'>
          <button type="button1" className='button1'>lisää ostokoriin</button>
          </div>
        </div>
        
        <div className='tuoteright'>
          <div className='title'>{ props.nimi }</div>
          <div className='kuvaus'>{ props.kuvaus }</div>
          <div className='hinta'>{ props.hinta }€</div>
        </div>

      </div>

      </div>
 
    </div>
  )
}