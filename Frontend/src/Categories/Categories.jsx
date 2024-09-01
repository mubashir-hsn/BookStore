import React from 'react'
import HeroSection from '../Components/CategoryComponents/HeroSection'
import Collections from '../Components/CategoryComponents/Collections'
import NewCards from '../Components/CategoryComponents/NewCards'
import Navbar from "../Components/HomeComponents/Navbar.jsx"
import Footer from "../Components/HomeComponents/Footer.jsx"
const Categories = () => {
  return (
    <>
    <Navbar/>
   <HeroSection/>
   <Collections/>
   <NewCards/>
   <Footer/>
    </>
  )
}

export default Categories 