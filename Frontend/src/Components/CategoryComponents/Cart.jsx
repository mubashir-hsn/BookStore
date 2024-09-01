import React, { useContext } from 'react';
import Navbar from '../HomeComponents/Navbar';
import Footer from '../HomeComponents/Footer';
import { CartContext } from '../../ContextApi/CartContext';

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <div className='bg-white dark:bg-slate-800'>
                <Navbar/>
                <div className='min-h-screen h-full pt-28'>
                    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-lg font-semibold">Your cart is empty.</p>
                        ) : (
                            <div className="overflow-x-auto max-w-[950px] w-full">
                                <table className="table min-w-full">
                                    {/* head */}
                                    <thead>
                                        <tr className='bg-blue-500 text-[14px] sm:text-[16px] text-white dark:bg-black dark:text-slate-400'>
                                            <th>No.</th>
                                            <th>Books Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className='bg-blue-100 dark:bg-gray-800'>
                                        {cartItems.map((item, index) => (
                                            <tr key={item._id} className='border-none'>
                                                <th className='dark:text-slate-200'>{index + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-4 sm:gap-6">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle h-12 w-12">
                                                                <img src={item.img} alt={item.title} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-black dark:text-slate-200">{item.title}</div>
                                                            <div className="text-sm opacity-50">{item.author}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2 items-center">
                                                        <button
                                                            onClick={() => decreaseQuantity(item._id)}
                                                            className="btn btn-ghost btn-xs"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => increaseQuantity(item._id)}
                                                            className="btn btn-ghost btn-xs"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>${item.price.toFixed(2)}</td>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {/* Total Price Section */}
                        <div className="p-4 bg-teal-200 w-full max-w-[950px] flex flex-col sm:flex-row gap-4 justify-center items-center cursor-pointer hover:bg-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:text-slate-200">
                            <h2 className="text-xl sm:text-2xl font-semibold">Checkout Total Payment Is :</h2>
                            <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export default Cart;
