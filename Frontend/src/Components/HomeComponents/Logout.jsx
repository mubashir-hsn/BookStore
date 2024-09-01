import React from 'react'
import { useAuth } from '../../ContextApi/AuthProvider'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user : null
        })
        localStorage.removeItem("Users")
        toast.success("User logout successfully.")
        setTimeout(()=>{window.location.reload()},2000)

        }catch (error) {
            toast.error("Error: " + error.message)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <Link to="/" onClick={handleLogout} className="px-5 py-3 bg-red-500 text-white rounded-xl cursor-pointer shadow-md">Logout</Link>
  )
}

export default Logout