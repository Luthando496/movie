import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Footer = () => {
    





  return (
    <footer className='bg-black/80 pt-12 w-full'>
    <h1 className="text-center text-3xl font-bold text-white">Start for your first 30 days.</h1>
    <h1 className="text-center text-xl font-thin text-white my-8">Ready to watch? Enter your email to create or restart your membership.</h1>

    <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center my-[5rem] gap-8">
        <input type="text" className="px-8 py-4 text-2xl" placeholder='Type your e-mail address' />
        <button className="px-8 bg-red-500 text-white text-2xl font-light hover:bg-red-900 duration-700 py-4">Getting Started</button>
    </div>
    <div className="w-[90%] h-[1px] bg-slate-200 mx-auto"></div>

    <div className="mt-[4rem] flex flex-col lg:grid  py-4 lg:grid-cols-2 gap-8 w-[97%] mx-auto">

    <div className="text-white ">
    <h1 className="text-2xl font-bold mb-8">Questions? Call 0850-380-6444</h1>
    <p className="text-xl font-light">Format for custom post types that are not book or you can use else<br /> if to specify a second post type the same way as above.</p>
    <button className="my-8 border-gray-200 border py-4 px-12 text-center text-xl font-light">ENGLISH</button>
    </div>

    <div className="grid grid-cols-3 text-white gap-2">
    
    <div className="">
    <h1 className="text-xl font-semibold mb-8">DIGIFLEX</h1>
    <ul className="flex flex-col space-y-4 pl-4">
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Digiflex</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Devices</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Tips</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Contact</span>
        </li>
    </ul>
    </div>
    {/*  */}
    <div className="">
    <h1 className="text-xl font-semibold mb-8">Support</h1>
    <ul className="flex flex-col space-y-4 pl-4">
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">FAQ</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Help Center</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Account</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Support</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Media Center</span>
        </li>
    </ul>
    </div>
    {/* //  */}
    <div className="">
    <h1 className="text-xl font-semibold mb-8">Policies</h1>
    <ul className="flex flex-col space-y-4 pl-4">
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Privacy Policy</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Terms & Agreement</span>
        </li>
        <li className="">
            <span className="text-xl font-thin hover:underline duration-300">Legal Notices</span>
        </li>
    </ul>
    </div>


    </div>


    </div>
    <div className="py-8 bg-black text-white flex justify-between">
        <h4 className="text-xl">© 2020 MovieFLix | Online Movie Streaming</h4>
        <h4 className="text-xl">Site create by Luthando</h4>
    </div>

    </footer>
  )
}

export default Footer