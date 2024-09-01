import React, { useEffect , useState,useContext} from 'react'
import Cards from "../HomeComponents/Cards.jsx"
import axios from "axios"
import { CartContext } from '../../ContextApi/CartContext.jsx';


const Collections = () => {

  const { addToCart } = useContext(CartContext);
  const [book, setbook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const response = await axios.get("http://localhost:4001/book")
       setbook(response.data)
      } catch (error) {
        console.log("Error: " , error)
      }
    }
    getBook()
  },[])

  const data = book.filter((data) => data.category === "satire")
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto p-4 md:p-20">

        <div>
          <h1 className="text-3xl md:text-4xl pl-5 font-[Agbalumo] text-start pt-5 dark:font-semibold border-b-2 pb-3">Our Collections</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 mt-10">
          {
            data.map(
              (item) => (
                <Cards item={item} key={item._id} addToCart={addToCart}/>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Collections