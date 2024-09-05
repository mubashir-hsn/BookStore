import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({item}) => {

    return (
        <>
            <div className="mt-5 mb-10">
                <div className="card w-80 h-[400px] bg-base-100 shadow-xl shadow-blue-200 transition-all duration-1000 scale-[0.9] dark:bg-slate-800 dark:text-slate-200 dark:shadow-lg dark:shadow-blue-900 hover:scale-[0.96]">
                    <figure><img  className=" h-44 w-full" src={item.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                        </h2>
                        <p className="text-sm  text-justify dark:text-slate-400 line-clamp-4" >{item.disc}</p>
                        <div className="card-actions justify-between">
                            <div className="badge font-semibold border-blue-500 badge-outline dark:border-blue-700 dark:text-slate-300">${item.price}</div>

                            <Link 
                             to={`/bookdetail/${item._id}`}
                               className="border border-blue-500 rounded-lg px-2 text-[12px] py-1 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer dark:hover:bg-blue-700 dark:border-blue-700 dark:text-slate-100">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards