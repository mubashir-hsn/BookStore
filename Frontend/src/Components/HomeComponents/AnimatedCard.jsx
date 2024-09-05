import React, { useContext } from 'react';
// import { CounterContext } from '../../ContextApi/CounterContext.jsx';
import { CartContext } from '../../ContextApi/CartContext';
import './Card.css';
import { Link } from 'react-router-dom';

const AnimatedCard = ({ item }) => {

  const { addToCart } = useContext(CartContext);
  // const value = useContext(CounterContext)

  return (

    <>
      <div className="mt-5 mb-10 ml-5">
        <div id="card" className="card dark:bg-black dark:shadow-xl dark:shadow-slate-100">
          <div className="bg dark:bg-black dark:outline-2 dark:outline-black">
            <figure><img className=" h-44 w-full" src={item.img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title dark:text-blue-600">
                {item.title}
              </h2>
              <p className="text-sm text-justify dark:text-slate-400 line-clamp-3" >{item.disc}</p>
              <div className="card-actions justify-between">
                <div className="badge font-semibold border-blue-500 badge-outline dark:border-blue-300 dark:text-slate-300">${item.price}</div>
                <Link
                  to={`/bookdetail/${item._id}`}
                  className="border border-blue-500 rounded-lg px-2 text-[12px] py-1 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer dark:hover:bg-blue-700 dark:border-blue-700 dark:text-slate-100">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="blob dark:bg-[#ff9966]"></div>
        </div>
      </div>

    </>

  );
};

export default AnimatedCard;
