import React from 'react'

export default function TuoteItem(props) {
  
  return (
    <div>
      <div className='TuoteItem'>

       <div className='tuoteitemleft'>
          <button type="button" className='button'>+</button>
          <div className='count'> &nbsp;{ props.qty }&nbsp; </div>
          <button type="button" className='button'>-</button>
        </div>

        <div className='tuoteitemright'>
          <div className='title'>{ props.title }</div>
          <div>{ props.description }</div>
          <div>${ props.price }</div>
        </div>

      </div>
    </div>
  )
}
