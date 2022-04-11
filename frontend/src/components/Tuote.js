import React from 'react'

export default function Tuote(props) {

/*
  function onButtonCLick(element) {
    props.itemClickedEvent(element);
  }
*/  
  return (
    <div>
      <div className='Tuote'>

        <div className='tuoteleft'>
        <button type="button" className='button'>+</button>
          <div className='count'> &nbsp;{ props.qty }&nbsp; </div>
          <button type="button" className='button'>-</button>
        </div>

        <div className='tuoteright'>
          <div className='title'>{ props.nimi }</div>
          <div>{ props.kuvaus }</div>
          <div>${ props.hinta }</div>
        </div>

      </div>
    </div>
  )
}
