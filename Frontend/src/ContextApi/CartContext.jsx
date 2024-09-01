import { createContext, useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { CounterContext } from "./CounterContextApi.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { setcount } = useContext(CounterContext) || {};  // Safely destructure setcount

    // console.log("CartContext setcount:", setcount);  // Check if setcount is available

    // Add to cart
    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

        if (existingItem) {
            // Item is already in the cart
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Book is already added to cart",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // Item is not in the cart, add it
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            if (setcount) {
                setcount((count) => count + 1);  // Increase count only when adding a new item
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book is added to cart.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // Increase quantity of an item in the cart
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(cartItem =>
            cartItem._id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
    };

    // Decrease quantity of an item in the cart
    const decreaseQuantity = (id) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(cartItem =>
                cartItem._id === id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            
            // Remove the item if its quantity is now 0
            return updatedItems.filter(cartItem => cartItem.quantity > 0);
        });
    };

    // Update the count when cartItems change
    useEffect(() => {
        if (setcount) {
            setcount(cartItems.reduce((sum, item) => sum + item.quantity, 0));
        }
    }, [cartItems, setcount]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
