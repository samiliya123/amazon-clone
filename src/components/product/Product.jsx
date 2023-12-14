import React from 'react'
import './product.css'
import GradeIcon from '@mui/icons-material/Grade';
import { useStateValue } from '../../StateProvider';

const Product = ({ id, title, price, rating, image }) => {
   const [ {basket}, dispatch ] = useStateValue()
   console.log(basket);

   const addToBasket = () => {
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
        }
    })
   }

  return (
            <div className="product">
                <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p className='product__star'><GradeIcon fontSize='' /></p>
                        ))
                    }
                </div>
                </div>
                
                <img className='product__image' src={image} alt="" />
                <button onClick={addToBasket}>Add to basket</button>
            
            </div>
  )
}

export default Product