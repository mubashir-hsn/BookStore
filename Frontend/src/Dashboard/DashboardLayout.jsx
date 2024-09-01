import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
         
          <div className="flex flex-col bg-slate-50 dark:bg-slate-900 dark:text-slate-200">
            <Outlet/>
          </div>
       
    
  )
}

export default DashboardLayout