import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Home from "./Home/Home.jsx"
import About from './About/About.jsx';
import Categories from './Categories/Categories.jsx';
import Contact from './Contact/Contact.jsx';
import SignUp from './Components/HomeComponents/SignUp.jsx';
import { useAuth } from "./ContextApi/AuthProvider.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { counterContext } from './ContextApi/counterContext.js';
import DashboardLayout from './Dashboard/DashboardLayout.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import UploadBook from './Dashboard/UploadBook.jsx'
import ManageBook from './Dashboard/ManageBook.jsx'
import EditBook from './Dashboard/EditBook.jsx'

function App() {
  const [count, setcount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <counterContext.Provider value={{ count, setcount }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={authUser ? <Categories /> : <Navigate to="/signup" />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Admin routes with protected access */}
          <Route path="/admin/dashboard" element={authUser ? <DashboardLayout /> : <Navigate to="/signup" />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/dashboard/upload" element={<UploadBook />} />
            <Route path="/admin/dashboard/managebook" element={<ManageBook />} />
            <Route path="/admin/dashboard/editbook/:id" element={<EditBook />} loader={({params}) => fetch(`http://localhost:4001/book/${params.id}`)} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </counterContext.Provider>
    </>
  )
}

export default App
