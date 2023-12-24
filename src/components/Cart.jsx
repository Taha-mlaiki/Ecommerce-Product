import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../cartSlice';

const Cart = () => {
  const itemCart = useSelector(state => state.cart ? state.cart : null);
  const dispatch = useDispatch();

  return (
    <div className='cart-items'>
      <h4 className='border-bottom py-3 px-2'>Cart</h4>
      {itemCart && itemCart.length > 0 ? (
        <div className="content">
          <div className='d-flex align-items-center px-2'>
            <img className='me-2' src={itemCart[0].img} alt="" />
            <div>
              <h4>{itemCart[0].text}</h4>
              <span>${itemCart[0].price.toFixed(2)} x {itemCart[0].quantity} <span className='ms-2 fs-6 fw-bold text-dark'>${(itemCart[0].price * itemCart[0].quantity).toFixed(2)}</span></span>
            </div>
            <i onClick={() => dispatch(removeItem())} className="fa-solid fa-trash mt-3 text-danger"></i>
          </div>
        </div>
      ) : (
        <h3 className='text-center mt-5'>No item Added</h3>
      )}
    </div>
  );
}

export default Cart;

