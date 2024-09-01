import React from 'react'
import DashboardCard from './DashBoardCard'
import UserChart from './UserChart'
import LeadChart from './LeadChart'
import PieChart from './PieChart'
import SideMenu from './SideMenu'
const Dashboard = () => {
  return (
    <>
    <div className='w-full sticky top-0 z-10 h-20 bg-white shadow-md pl-8 dark:bg-slate-800 text-black dark:text-white flex items-center justify-start gap-6 '>
      <SideMenu/>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
    <div className="flex flex-col">
    <div className="px-4 mt-12">
      <DashboardCard/>
    </div>
      <UserChart/>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
      <LeadChart/>
      <PieChart/>
      </div>
    </div>
  
    </>
  )
}

export default Dashboard