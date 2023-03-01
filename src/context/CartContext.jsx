import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartLlist] = useState([]);

    const addToCart = (product, qty) => {
        setCartLlist([
            ...cartList,
            product
        ])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);