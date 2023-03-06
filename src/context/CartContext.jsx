import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartLlist] = useState([]);

    const addToCart = (product) => {
        setCartLlist([
            ...cartList,
            product
        ])
    }

    const clearCart = () => {
        setCartList([]);
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
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);