import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-12 w-full'>
    <h1 className="text-center text-3xl font-bold text-white">Start for your first 30 days.</h1>
    <h1 className="text-center text-xl font-thin text-white">Ready to watch? Enter your email to create or restart your membership.</h1>

    <div className="w-[80%] mx-auto flex items-center justify-center my-9 gap-8">
        <input type="text" className="px-8 py-4 text-2xl" placeholder='Type your e-mail address' />
        <button className="px-8 bg-red-500 text-white text-2xl font-light hover:bg-red-900 duration-700 py-4">Getting Started</button>
    </div>

    </footer>
  )
}

export default Footer