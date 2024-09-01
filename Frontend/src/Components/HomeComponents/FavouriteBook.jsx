import React from 'react'
import {Link} from 'react-router-dom'
const FavouriteBook = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mt-28 mb-8 px-4 md:px-20 md:flex justify-center items-start">
        <div className="w-full md:w-1/2 ">
          <img className="w-[28rem] h-[24rem]" src="/favoritebook.jpg" alt="Book" />
        </div>
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center items-start mt-7">
          <h1 className="text-3xl font-bold dark:text-slate-200">Find Your Favourite </h1>
          <h1 className="text-blue-500 font-bold text-3xl">Book Here!</h1>
          <p className="text-sm  text-justify py-3 my-3 dark:text-slate-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint minus, ex delectus iure repellendus doloribus excepturi voluptate totam explicabo rerum nisi illo magni quaerat.</p>

          <div className="flex justify-evenly items-center gap-12">
            <div>
              <span className="text-lg md:text-xl justify-center font-semibold dark:text-slate-200"> 800+</span><br /> <span className="text-[10px] md:text-xs dark:text-slate-300">Book Listing</span>
            </div>
            <div>
              <span className="text-lg md:text-xl font-semibold dark:text-slate-200">500+</span><br /> <span className="text-[10px] md:text-xs dark:text-slate-300">Register User</span>
            </div>
            <div>
              <span className="text-lg md:text-xl font-semibold dark:text-slate-200">1200+</span><br /> <span className="text-[10px] md:text-xs dark:text-slate-300">Pdf Downloaded</span>
            </div>
          </div>
         
          <div
            className="max-w-32 mt-6 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
          >
            <button className="px-5 py-2"><Link className="text-sm" to="/categories">Explore Now</Link></button>
          </div>


        </div>
      </div>

      <div className="max-w-screen-2xl h-60 bg-blue-300 container mx-auto mt-20 mb-8 px-1 md:px-20 flex justify-center items-start dark:bg-indigo-950 dark:text-slate-100">
        <div className=" w-[60%] md:w-1/2  md:px-5 flex flex-col justify-center items-start">
          <h1 className=" text-xl md:text-2xl text-white font-bold mt-8 py-2 md:py-5">2023 National Book Awards For Fiction Shortlist</h1>

          <div
            className="max-w-32 mt-3 bg-white items-center justify-center flex border-1 border-black shadow-lg hover:bg-black text-black hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
          >
            <button className="px-5 py-2"><a className="text-sm" href="">Explore Now</a></button>
          </div>

        </div>
        <div className=" w-[30%] md:w-1/2  flex items-center justify-center" >
          <img className=" w-20 h-16 md:w-28 md:h-24 mt-16" src="/awardbooks.png" alt="Book" />
        </div>
      </div>
    </>
  )
}

export default FavouriteBook