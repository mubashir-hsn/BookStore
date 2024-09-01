import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table } from "flowbite-react";
import toast from 'react-hot-toast';
import SideMenu from './SideMenu';

const ManageBook = () => {
  const [allBooks, setallBooks] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const books = await fetch('http://localhost:4001/book')
        const data = await books.json()
        setallBooks(data)
      } catch (error) {
        console.log("Error: ", error)
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4001/book/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Failed to delete book');
      }

      const data = await response.json();
      toast.success('Book deleted successfully.');
    } catch (error) {
      toast.error('Error: ' + error.message);
    }
  };


  return (
    <>
    <div className='w-full sticky top-0 z-10 h-20 bg-white shadow-md pl-8 dark:bg-slate-800 text-black dark:text-white flex items-center justify-start gap-6 '>
    <SideMenu/>
    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    </div>

    <div className="px-4 my-12">
      <h1 className="mb-10 border-b-black dark:border-b-slate-400 border-b-2 inline-block ml-10 text-2xl font-medium">Manage Your Books!</h1>

      <div className="overflow-x-auto">
        <Table className="min-w-full lg:max-w-[800px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Books name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              Manage
            </Table.HeadCell>
          </Table.Head>
          {
            allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.title}
                  </Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>{book.price}$</Table.Cell>
                  <Table.Cell className="flex justify-center items-center space-x-2">
                    <Link to={`/admin/dashboard/editbook/${book._id}`} className="bg-blue-500 px-2 py-1 rounded-sm font-semibold text-white hover:bg-blue-600">
                      {/* <img className="w-6 h-6" src="/edit.svg" alt="Edit" /> */}
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(book._id)} className="bg-red-500 rounded-sm px-2 py-1 text-white font-semibold hover:bg-red-700">
                      {/* <img className="w-6 h-6" src="/del.png" alt="Delete" /> */}
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))
          }
        </Table>
      </div>
    </div>
    </>

  )
}

export default ManageBook