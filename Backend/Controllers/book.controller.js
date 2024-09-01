import Book from "../Models/books.model.js"

 const getBook = async(req,res)=>{
   try {
    const book = await Book.find()
    res.status(200).json(book)
   } catch (error) {
    console.log("Error while finding book from database: ",error)
    res.status(500).json(error)
   }
}


export default getBook