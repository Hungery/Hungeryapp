import React from 'react'
import '../Tuote.css'

export default function Tuote({addToCart, removeFromCart, cartItems, props}) {
    /*
    const {addToCart } = props;
    const {removeFromCart} = props;
    const {cartItems} = props;
    */

  return (

    <div className='menu'>

      <div className='alapalkki'>
        <div className='ravintolannimi'>{ props.nimiravintola }</div>
        <div className='kuva'>kuva</div>

        <div className='Tuote'>

            <div className='tuoteleft'>
                <div className='tuoteleft2'>
                </div>
                <div className='tuoteleft1'>
                </div>
            </div>
            
            <div className='tuoteright'>
                <div className='title'>{ props.nimi }</div>
                <div>{ props.kuvaus }</div>
                <div>{ props.hinta } €</div>
            </div>

        </div>
        

        <div ckassName='menu-price'>
            <button 
                onClick={() => removeFromCart(props.menuid, props.nimi, props.hinta, props.qty)} 
                className="button primary">
                -                                  
            </button>

            <div>                  
                {cartItems.length}
            </div>

            <button 
                onClick={() => addToCart(props.menuid, props.nimi, props.hinta, props.qty)} 
                className="button primary">
                +
            </button>
        </div>

      </div>

      
    </div>
  )
}