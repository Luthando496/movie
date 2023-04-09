import React from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='w-full bg-slate-800 py-4'>
    <div className="w-[90%] mx-auto flex justify-between items-center">
    <Link to='/'  >
        <img src="/assets/logo.png" alt="logo"  className='h-[5rem]'  />
    </Link>

    <ul className="flex gap-8 items-center">
        <li><Link className='text-white uppercase text-md lg:text-xl font-thin' to='/'>Home</Link></li>
        <li><Link className='text-white uppercase text-md lg:text-xl font-thin' to='/movies'>movies</Link></li>
        <li><Link className='text-white uppercase text-md lg:text-xl font-thin' to='/tv-shows'>TV-Shows</Link></li>
    </ul>


    </div>

    </nav>
  )
}

export default Navbar