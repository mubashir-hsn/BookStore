import React ,{useEffect,useState,Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnimatedCard from './AnimatedCard';
import axios from 'axios';


const FreeBookSlider = () => {

  const [book, setbook] = useState([])
  useEffect(()=>{
      const getBook = async()=>{
          try {
              const res = await axios.get("http://localhost:4001/book")
              setbook(res.data)
          } catch (error) {
              console.log("Error: ",error)
          }
      }
      getBook()
  },[])

     const filterData = book.filter((data)=> data.category === "mist")

     var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 dark:bg-slate-[850] dark:text-slate-300">
        <div>
       <h1 className="text-5xl font-bold font-[Agbalumo] text-center my-8 pt-5 dark:font-semibold">Stories</h1>
        </div>

     <div>
     <Slider {...settings}>

       {
         filterData.map((item)=>(
            <AnimatedCard item={item} key={item._id}/>
         ))
       }
       
      </Slider>
     </div>
    </div>
    </>
  )
}

export default FreeBookSlider