import express from "express"
import getBook from "../Controllers/book.controller.js"

const bookRoute = express.Router()

bookRoute.get("/",getBook)

export default bookRoute