import React from 'react';
import './checkout.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct';
import Subtitle from '../../components/subtitle/Subtitle';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className="checkout__left">
      <img
        className='checkout__ad'
        src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        alt=''
      />

      {basket?.length === 0 ? (
        <div>
          <h3>Your shopping basket is empty!</h3>
          <p>You dont have item here go back and click 'add to basket'</p>
        </div>
      ) : (
        <div className='checkout__info'>
          <h2 className='Checkout__title'>Your shopping basket</h2>
          {basket.map(item => (
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
        </div>

      )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          
            <Subtitle />
        </div>
        
      )}
    </div>
  );
};

export default Checkout;
