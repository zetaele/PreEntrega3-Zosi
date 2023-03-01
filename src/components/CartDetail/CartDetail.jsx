import React from 'react';
import { useCartContext } from '../../context/CartContext';

export default function CartDetail() {
  const { cartList } = useCartContext();
  console.log(cartList)
  return (
    <div className="container custom-container">
      {
        cartList.map(p => {
          <div>
            {p.name}
          </div>
        })
      }
    </div>
  )
}
