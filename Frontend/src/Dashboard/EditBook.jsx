import React, { useState } from 'react'
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom'
import toast from "react-hot-toast"
import SideMenu from './SideMenu';

const EditBook = () => {

  const { id } = useParams();
  const { title, price, disc, img } = useLoaderData()

  const bookCategories = [
    "mist",
    "new",
    "satire",
  ]
  const [selectCategory, setselectCategory] = useState(bookCategories[0])

  const handleChangeCategory = (e) => {
    setselectCategory(e.target.value)
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const disc = form.disc.value;
    const img = form.img.value;

    const bookObj = { title, category, price, disc, img };

    try {
      const response = await fetch(`http://localhost:4001/book/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookObj),
      });

      if (!response.ok) {
        throw new Error(`Error updating book: ${response.statusText}`); // Handle non-2xx responses
      }

      const data = await response.json();
      toast.success('Book updated successfully.');
    } catch (error) {
      console.error(error);
      toast.error('Error updating book. Please try again.'); // Provide user feedback
    }

    form.reset();
  };


  return (

    <>
      <div className='w-full sticky top-0 z-10 h-20 bg-white shadow-md pl-8 dark:bg-slate-800 text-black dark:text-white flex items-center justify-start gap-6 '>
        <SideMenu />
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <div className="px-4 my-12">
        <h1 className="mb-10 border-b-black dark:border-b-slate-400 border-b-2 inline-block ml-10 text-2xl font-medium">Edit Your Book!</h1>

        <form onSubmit={handleUpdate} className="flex flex-col mx-auto gap-8 max-w-[900px]">
          {/* {First row} */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* {Book title} */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="title" value="Book Title" />
              </div>
              <TextInput defaultValue={title} id="title" name='title' type="text" placeholder="Your book name" required className="w-full" />
            </div>
            {/* {Category} */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Book Category" />
              </div>
              <Select id='category' name='category' className='w-full rounded mt-2' value={selectCategory} onChange={handleChangeCategory}>
                {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
              </Select>
            </div>
          </div>

          {/* {2nd row} */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* {Book URL} */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="img" value="Book URL" />
              </div>
              <TextInput defaultValue={img} id="img" name='img' type="text" placeholder="Your image URL" required className="w-full" />
            </div>
            {/* {Price} */}
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="price" value="Book Price" />
              </div>
              <TextInput defaultValue={price} id="price" name='price' type="text" placeholder="Your book price" required className="w-full" />
            </div>
          </div>

          {/* {3rd row} */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="disc" value="Book Description" />
            </div>
            <Textarea defaultValue={disc} id="disc" name='disc' placeholder="Your book description..." required rows={6} className="w-full" />
          </div>

          <div>
            <Button type="submit" className="w-full py-2 text-lg">Update Book</Button>
          </div>
        </form>
      </div>
    </>

  )
}

export default EditBook