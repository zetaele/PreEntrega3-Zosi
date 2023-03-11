import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(stock ? 1 : 0);
    const [isMainAction, setIsMainAction] = useState(true);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        onAdd(count);
        setIsMainAction(false);
    }

    return (
        <div className="cart-actions">
            {
                isMainAction
                    ?
                        <>
                            <button type="button" className="btn btn-primary m-2" disabled={!stock} onClick={handleRemove}>-</button>
                            <input type="number" className="text-center w-25" disabled value={count} />
                            <button type="button" className="btn btn-primary" disabled={!stock} onClick={handleAdd}>+</button>
                            <button type="button" className="btn btn-primary m-2" onClick={handleAddToCart}>Agregar al carrito</button>
                        </>
                    :
                        <>
                            <Link to='/' type="button" className="btn btn-primary m-2">
                                Continuar Comprando
                            </Link>
                            <Link to='/cart' type="button" className="btn btn-secondary">
                                Ir al Carrito
                            </Link>
                        </>
            }

        </div>
    )
}

export default ItemCount;