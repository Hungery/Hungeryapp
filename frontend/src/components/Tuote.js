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
          <div className='title'>{ props.title }</div>
          <div>{ props.description }</div>
          <div>${ props.price }</div>
        </div>

      </div>
    </div>
  )
}
