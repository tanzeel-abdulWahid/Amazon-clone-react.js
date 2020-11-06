import React from 'react'
import './CheckoutProducts.css'
import {useStateValue} from './StateProvider';

function CheckoutProducts({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='checkoutprodut'>
            <img className='checkoutprodut_image' src={image} alt='' />

            <div className='checkoutprodut_info'>
                <p className='checkoutprodut_title'>{title}</p>

                <p className='checkoutprodut_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutprodut_rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div>

            <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>

        </div>
    )
}

export default CheckoutProducts
