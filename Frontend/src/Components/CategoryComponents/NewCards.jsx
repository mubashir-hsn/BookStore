import React, { useEffect, useState ,useContext} from 'react'
import Slider from "react-slick";
import Cards from "../HomeComponents/Cards.jsx"
import { CartContext } from '../../ContextApi/CartContext.jsx';
import axios from "axios"

const NewCards = () => {

    const [book, setbook] = useState([])
    const { addToCart } = useContext(CartContext);
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
    const data = book.filter((data) => data.category === "new")

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
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">

                <div>
                    <h1 className="text-3xl  md:text-4xl font-[Agbalumo] text-start pl-5 pt-5 dark:font-semibold border-b-2 pb-3">New Arrivals</h1>
                </div>

                <div className="mt-5">
                    <Slider {...settings}>

                        {
                            data.map(
                                (item) => (
                                    <Cards item={item} key={item._id} addToCart={addToCart} />
                                )
                            )
                        }

                    </Slider>
                </div>

                <div className="w-full bg-blue-300 mt-10 flex flex-col p-10 items-center justify-center rounded-lg dark:bg-slate-800 text-white dark:text-slate-200 bg-cover bg-no-repeat bg-center ">
                    <h1 className="text-xl md:text-2xl text-center font-medium py-5">Subscribe And Stay Updated On The <br /> Latest Books, Promotions And Events</h1>

                    <div className="join mt-5 outline-none">
                        <input className="input md:w-[27rem] dark:bg-slate-600 dark:text-slate-300 input-bordered outline-none join-item" placeholder="Enter your email" />
                        <button className="btn join-item rounded-r-full bg-blue-800 border-none hover:bg-blue-900 text-white">Subscribe</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewCards