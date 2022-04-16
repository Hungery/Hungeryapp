import React from 'react'
import '../styles/Tuote.css'
export default function Tuote(props) {
 
  return (
    <div className='menu'>

      <div className='alapalkki'>
        <div className='ravintolannimi'>{ props.nimiravintola }</div>
        <div className='kuva'>kuva</div>

        <div className='Tuote'>

        <div className='tuoteleft'>
          <div className='tuoteleft2'>
          <button type="button" className='button'>+</button>
          <div className='count'> &nbsp;{ props.qty }&nbsp; </div>
          <button type="button" className='button'>-</button>
          </div>
          <div className='tuoteleft1'>
          <button type="button1" className='button'>lisää ostokoriin</button>
          </div>
        </div>
        
        <div className='tuoteright'>
          <div className='title'>{ props.nimi }</div>
          <div>{ props.kuvaus }</div>
          <div>${ props.hinta }</div>
        </div>

      </div>

      </div>
 
    </div>
  )
}