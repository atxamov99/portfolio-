import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "./assets/images-removebg-preview.png"
import { FaGithub } from "react-icons/fa";


const App = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex flex-col justify-between bg-yellow-400'>
        <div className='flex flex-col w-64 gap-6 p-4 '>
          <Link to={"/"}><img className='w-[150px]' src={logo} alt="" /></Link>
          <Link className='bg-blue-500 text-center rounded-2xl scale-3d hover:bg-blue-400 bg-auto' to={"/"}>Home</Link>
          <Link className='bg-blue-500 text-center rounded-2xl scale-3d hover:bg-blue-400 bg-auto' to={"/about"}>About</Link>
          <Link className='bg-blue-500 text-center rounded-2xl scale-3d hover:bg-blue-400 bg-auto' to={"/project"}>Project</Link>
      </div>
      <div className="flex justify-center items-center">
        <Link className='my-6' to={"https://github.com/atxamov99"}><FaGithub/></Link>
      </div>
      </div>

      <div className='bg-green-400 flex-1 p-3'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App