import { createContext, useContext, useState } from "react";

// Create a new context for the cart data
export const CartContext = createContext([]);

/**
 * A custom hook that provides access to the cart data stored in the CartContext.
 * @returns {object} The cart data and helper functions to interact with it.
 */
export const useCartContext = () => useContext(CartContext);

/**
 * A provider component that wraps around the entire application and provides the cart data and helper functions to all child components.
 * @param {object} children - The child components that should have access to the cart data.
 * @returns {JSX.Element} The provider component.
 */
export const CartContextProvider = ({ children }) => {
    // Set the initial state of the cart list and order id
    const [cartList, setCartList] = useState([]);
    const [orderId, setOrderId] = useState('');

    /**
     * Adds a product to the cart.
     * @param {object} product - The product to add to the cart.
     */
    const addToCart = (product) => {
        setOrderId('');
        const cart = [...cartList];
        var index = cart.findIndex(item => item.id === product.id);
        if (index > -1) {
            if ((cart[index].quantity + product.quantity) > product.stock) {
                cart[index].quantity = product.stock;
            } else {
                cart[index].quantity += product.quantity;
            }
        } else {
            cart.push(product);
        }
        setCartList(cart);
    }

    // Empty the cart list
    const clearCart = () => {
        setCartList([]);
    }

    /**
     * Set the order id
     * @param {number} id - The ID of the order.
     */
    const createOrder = (id) => {
        setOrderId(id);
    }
    
    // Get the total price of all items in the cart.
    const getItemsPrice = () => {
        return cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    // Get the total quantity of items in the cart.
    const getItemsQuantity = () => {
        return cartList.reduce((acc, item) => acc + item.quantity, 0);
    }

    // Get the current order ID.
    const getOrderId = () => {
        return orderId;
    }
    
    /**
     * Remove an item from the cart.
     * @param {number} id - The ID of the item to remove from the cart.
     */
    const removeItem = (id) => {
        const updatedCartList = cartList.filter(item => item.id !== id);
        setCartList(updatedCartList);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            createOrder,
            getItemsPrice,
            getItemsQuantity,
            getOrderId,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}
