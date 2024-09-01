import React ,{useContext} from 'react'
// import { CounterContext } from '../../ContextApi/CounterContext.jsx'

const Cards = ({ item ,addToCart }) => {

    // const value = useContext(CounterContext)

    return (
        <>
            <div className="mt-5 mb-10">
                <div className="card w-80 h-[400px] bg-base-100 shadow-xl shadow-blue-200 transition-all duration-1000 scale-[0.9] dark:bg-slate-800 dark:text-slate-200 dark:shadow-lg dark:shadow-blue-900 hover:scale-[0.96]">
                    <figure><img  className=" h-44 w-full" src={item.img} alt="Shoes" /></figure>
                    <div className="card-body h-[224px]">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge text-white bg-blue-500 dark:bg-blue-700 dark:border-none">{item.category}</div>
                        </h2>
                        <p className="text-sm h text-justify dark:text-slate-400" >{item.disc}</p>
                        <div className="card-actions justify-between">
                            <div className="badge font-semibold border-blue-500 badge-outline dark:border-blue-700 dark:text-slate-300">${item.price}</div>
                            <a
                               onClick={() => {
                                // value.setcount((count) => count + 1); 
                                addToCart(item);
                               }} 
                               className="border border-blue-500 rounded-lg px-2 text-[12px] py-1 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer dark:hover:bg-blue-700 dark:border-blue-700 dark:text-slate-100">
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards