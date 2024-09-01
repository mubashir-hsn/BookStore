import mongoose, {Schema} from "mongoose"

const bookSchema = new Schema({
     title : String,
     disc : String,
     img : String,
     price : Number,
     category : String,

},{timestamps:true})

  const Book = mongoose.model("Book",bookSchema)
  
  export default Book
