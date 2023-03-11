import React from 'react';
import { useCartContext } from '../../context/CartContext';

import CartItem from '../CartItem/CartItem';
import OrderForm from '../OrderForm/OrderForm';

const CartContainer = () => {
    const { cartList, clearCart, getItemsPrice, getOrderId } = useCartContext();
    
    const isCartEmpty = () => {
        return cartList.length == 0;
    }

    return (
        <div className="container custom-container">
            {
                isCartEmpty()
                    ? 
                        (
                            getOrderId() 
                                ?
                                    <div className="alert alert-success" role="alert">
                                        <p>Gracias por su compra</p>
                                        <p>Número: <b>{getOrderId()}</b></p>
                                    </div>
                                :
                                    <div className="alert alert-warning" role="alert">
                                        <p>No hay productos en su carrito de compras</p>
                                    </div>
                        )
                    :
                        (
                            <>
                                <div className="d-flex justify-content-end mb-3">
                                    <button type="button" className="btn btn-secondary ms-5" onClick={clearCart}>Vaciar Carrito</button>
                                </div>
                                { 
                                    cartList.map((item) => {
                                        return (
                                            <CartItem key={item.id} item={item} />
                                        )
                                    })
                                }
                                <div className="d-flex justify-content-end mb-3">
                                    <h2>Total: ${getItemsPrice()}</h2>
                                </div>
                                <OrderForm />
                            </>
                        )
            }
        </div>
    )
}

export default CartContainer;