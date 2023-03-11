import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [orderId, setOrderId] = useState('');

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

    const clearCart = () => {
        setCartList([]);
    }

    const createOrder = (id) => {
        setOrderId(id);
    }

    const getItemsPrice = () => {
        return cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    const getItemsQuantity = () => {
        return cartList.reduce((acc, item) => acc + item.quantity, 0);
    }

    const getOrderId = () => {
        return orderId;
    }
    
    const removeItem = (idToRemove) => {
        const updatedCartList = cartList.filter(item => item.id !== idToRemove);
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

export const useCartContext = () => useContext(CartContext);