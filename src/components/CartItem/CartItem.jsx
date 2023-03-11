import React from 'react'
import { useCartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useCartContext();

    return (
        <div className="col">
            <div className="card">
                <div className="row w-50">
                    <div className="col-md-4">
                        <img src={item.image_url} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <ul>
                                    <li>Precio: ${item.price}</li>
                                    <li>Cantidad: {item.quantity}</li>
                                    <li>Subtotal: ${item.price * item.quantity}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row w-50">
                            <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
