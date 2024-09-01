import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import SideMenu from './SideMenu';
import toast from "react-hot-toast"

const UploadBook = () => {

  const bookCategories = [
    "mist",
    "satire",
    "new"
  ]
  const [selectCategory, setselectCategory] = useState(bookCategories[0])

  const handleChangeCategory = (e) => {
    setselectCategory(e.target.value)
  }

  const handleSubmission = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const disc = form.disc.value;
    const img = form.img.value;

    const bookObj = {
      title, category, price, disc, img
    }

    try {
      const response = await fetch('http://localhost:4001/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookObj)
      });

      if (!response.ok) {
        throw new Error(`Error adding book: ${response.statusText}`); // Handle non-2xx responses
      }

      const data = await response.json();
      toast.success('Book uploaded successfully.');
    } catch (error) {
      console.error(error);
      toast.error('Error uploading book. Please try again.'); // Provide user feedback
    }

    form.reset();
  }

  return (
   
    <>
    <div className='w-full sticky top-0 z-10 h-20 bg-white shadow-md pl-8 dark:bg-slate-800 text-black dark:text-white flex items-center justify-start gap-6 '>
    <SideMenu/>
    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </div>

    <div className="px-4 my-12">
      <h1 className="mb-10 border-b-black dark:border-b-slate-400 border-b-2 inline-block ml-10 text-2xl font-medium">Upload Your Book Here!</h1>
      <form onSubmit={handleSubmission} className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* {First row} */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {/* {Book title} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" name='title' type="text" placeholder="Your book name" required />
          </div>
          {/* {Category} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select id='category' name='category' className='w-full rounded mt-2' value={selectCategory} onChange={handleChangeCategory}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>

        {/* {2nd row} */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {/* {Book URL} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="img" value="Book URL" />
            </div>
            <TextInput id="img" name='img' type="text" placeholder="Your image URL" required />
          </div>
          {/* {Price} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Book Price" />
            </div>
            <TextInput id="price" name='price' type="text" placeholder="Your book price" required />
          </div>
        </div>

        {/* {3rd row} */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="disc" value="Book Description" />
          </div>
          <Textarea id="disc" name='disc' placeholder="Your book description..." required rows={6} />
        </div>

        <div>
          <Button type="submit" className="w-full">Upload Book</Button>
        </div>
      </form>
    </div>
  </>
  )
}

export default UploadBook