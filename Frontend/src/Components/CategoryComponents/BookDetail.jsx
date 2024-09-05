import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../HomeComponents/Navbar.jsx';
import Footer from '../HomeComponents/Footer.jsx'
import { CartContext } from '../../ContextApi/CartContext'; 
import { MdStar } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";// Import the context

const BookDetail = () => {
  const { id } = useParams();
  const book = useLoaderData(); // Fetch the book data from loader
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  if (!book) {
    return <div>Loading...</div>; // Add a loading state
  }

  const { title, category, price, disc, img } = book;

  return (
    <>
      <Navbar />
      <div className="book-detail w-full my-16 flex justify-center items-center">
      <div className="p-3 max-w-7xl ">
        <div className="mt-6 sm:mt-20 lg:ml-5">
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt="Product-Image"
                  className="w-full h-full"
                />
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Product Title */}
                  <h1 className="text-3xl font-semibold sm:text-4xl">
                    {title}
                  </h1>
                  
                  {/* Product Description */}
                  <p className="mt-3 text-gray-600 dark:text-gray-400 text-md leading-6 text-justify sm:text-left sm:mt-4">
                   {disc}
                  </p>
                  {/* Product  Category*/}
                  <p className=" text-gray-700 dark:text-gray-300 font-semibold text-sm leading-6 text-justify sm:text-left sm:mt-2">
                   Category: {category}
                  </p>
                  {/* Star Ratings */}
                  <span className="my-2 text-xl text-yellow-400 dark:text-yellow-500 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <MdStar key={index} />
                    ))}
                  </span>
                  {/* Product Price */}
                  <span className="text-xl font-semibold sm:text-2xl">
                   Price: {price}$
                  </span>
                </div>
                {/* Order Button */}
                <div className=" ">
                  {/* Order Button */}
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-blue-500 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
                      title="Add to cart"
                      onClick={() => {
                        addToCart(book); // Use the book object here to add it to the cart
                      }}
                    >
                      <span>Add to cart</span>
                      <HiOutlineArrowCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default BookDetail;
