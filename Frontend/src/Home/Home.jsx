import React from 'react'
import Banner from "../Components/HomeComponents/Banner.jsx"
import FreeBookSlider from "../Components/HomeComponents/FreeBookSlider.jsx"
import FavouriteBook from "../Components/HomeComponents/FavouriteBook.jsx"
import TestimonialSlider from "../Components/HomeComponents/TestimonialSlider.jsx"
import Navbar from '../Components/HomeComponents/Navbar.jsx'
import Footer from '../Components/HomeComponents/Footer.jsx'

const Home = () => {
  return (
    <>
    <div className="max-w-full w-full h-full pb-8 bg-blue-200 dark:bg-slate-800 dark:text-white">
      <Navbar/>
      <Banner/>
    </div>
    <FreeBookSlider/>
    <FavouriteBook/>
    <TestimonialSlider/>
    <Footer/>
    </>
  )
}

export default Home