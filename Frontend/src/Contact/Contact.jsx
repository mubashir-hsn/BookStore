import React from 'react';
import Navbar from '../Components/HomeComponents/Navbar';
import Footer from '../Components/HomeComponents/Footer';

const Contact = () => {
  return (
    <>
     <Navbar/>
    <div className=" max-w-screen-2xl container mx-auto p-4 md:p-20 dark:bg-slate-800 ">

      <section className="text-center py-12 px-4 mt-20" >
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto dark:text-slate-400">
          We are here to help you. Reach out to us via any of the following methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200  dark:bg-slate-700 transition-colors">
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2  dark:text-slate-300">+1 123 456 7890</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200  dark:bg-slate-700 transition-colors">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2 dark:text-slate-300">query@ibookstore.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200  dark:bg-slate-700 transition-colors">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2 dark:text-slate-300">123 Andrew St, Wellness City</p>
          </div>
        </div>
      </section>
      <section className="bg-blue-100  rounded-md py-12 px-4 dark:bg-slate-700">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="Contactname" className="block text-gray-700 font-bold dark:text-slate-200">Name</label>
            <input
              type="text"
              id="Contactname"
              placeholder='Enter your name'
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-slate-800 dark:text-slate-200 dark:border-none dark:outline-none"
            />
          </div>
          <div>
            <label htmlFor="Contactemail" className="block text-gray-700 font-bold dark:text-slate-200">Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              id="Contactemail"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-slate-800 dark:text-slate-200 dark:border-none dark:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold dark:text-slate-200">Message</label>
            <textarea
              id="message"
              placeholder='Write your message'
              rows="5"
              className="w-full resize-none mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition dark:bg-slate-800 dark:text-slate-200 dark:border-none dark:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold border-b-2 pb-3">Frequently Asked Questions</h2>
        <div className="mt-14">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 dark:border-blue-500">
            <h3 className="text-xl font-bold py-2 text-justify">How can I find out if a specific book is available at the bookstore?</h3>
            <p className="mt-2 text-gray-700 text-justify dark:text-slate-300">You can typically check the availability of a book by visiting the bookstore's website and using their online search feature. Many bookstores also provide the option to call or email them directly to inquire about the availability of a specific title.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-6 dark:border-blue-500">
            <h3 className="text-xl text-justify font-bold py-2">Do bookstores offer any special discounts or loyalty programs for frequent customers?</h3>
            <p className="mt-2 text-justify text-gray-700 dark:text-slate-300">Yes, many bookstores offer loyalty programs where customers can earn points for their purchases, which can then be redeemed for discounts or free merchandise. Additionally, some bookstores offer special discounts or promotions for members of their loyalty programs.</p>
          </div>

          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-6 dark:border-blue-500">
            <h3 className="text-xl font-bold text-justify py-2">Can I return or exchange a book if I change my mind after purchase?</h3>
            <p className="mt-2 text-gray-700 text-justify dark:text-slate-300">Policies regarding returns and exchanges vary depending on the bookstore. However, most bookstores have a return policy that allows customers to return or exchange books within a certain timeframe, typically with a receipt and in resalable condition. It's always a good idea to check the specific return policy of the bookstore you purchased from.</p>
          </div>

        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
