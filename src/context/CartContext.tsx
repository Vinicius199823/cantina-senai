import React, {createContext, useState, ReactNode} from "react";
import { Product } from '../data/products';

interface CartContextData {
    cartItem: Product[];
    addToCart: (product: Product) => void;
    removeFromCart:(index: number) => void;
    getTotal: () => number;
}
export const CartContext = createContext<CartContextData>( 
    {} as CartContextData
)

interface Props {
    children: ReactNode;
}

export function CartProvider({children} :Props) {
    const [cartItem, setCartItem] = useState<Product[]>([]);

    function addToCart(product:Product){
        setCartItem((prev) => [...prev, product]);
    }
    
    function removeFromCart(index: number){
        setCartItem((prev) => prev.filter((_, i) => i !== index));
    }
    
    function getTotal() {
        return cartItem.reduce((total, item) => total + item.price, 0);
    }

    return ( 
        <CartContext.Provider
            value={{cartItem, addToCart, removeFromCart, getTotal}}
        > {children}
        </CartContext.Provider>
    );
}