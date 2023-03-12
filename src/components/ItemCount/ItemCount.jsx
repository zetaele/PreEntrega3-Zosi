import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * A component that allows the user to select a quantity of items to add to the cart.
 * @param {Object} props - The component's properties.
 * @param {number} props.stock - The quantity of items in stock.
 * @param {Function} props.onAdd - The function to call when the user adds an item to the cart.
 * @returns {JSX.Element} The ItemCount component.
 */
const ItemCount = ({ stock, onAdd }) => {
    // Initialize count state to either 1 if there is stock, or 0 if not.
    const [count, setCount] = useState(stock ? 1 : 0);
    // Initialize isMainAction state to true.
    const [isMainAction, setIsMainAction] = useState(true);
   
    /**
     * Handles the add button click event.
     * If the current count is less than the stock, increments the count by 1.
     */
    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    /**
     * Handles the remove button click event.
     * If the current count is greater than 1, decrements the count by 1.
     */
    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    /**
     * Handles the add to cart button click event.
     * Calls the onAdd function with the current count, and sets isMainAction state to false.
     */
    const handleAddToCart = () => {
        onAdd(count);
        setIsMainAction(false);
    }

    return (
        <div className="cart-actions">
            {
                isMainAction
                    ? // If the main action is to add to cart, display the count input and add to cart button.
                        <>
                            <button type="button" className="btn btn-primary m-2" disabled={!stock} onClick={handleRemove}>-</button>
                            <input type="number" className="text-center w-25" disabled value={count} />
                            <button type="button" className="btn btn-primary" disabled={!stock} onClick={handleAdd}>+</button>
                            <button type="button" className="btn btn-primary m-2" onClick={handleAddToCart}>Agregar al carrito</button>
                        </>
                    : // If the main action is not to add to cart, display continue shopping and go to cart buttons.
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