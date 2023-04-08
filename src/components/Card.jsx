import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'

const Card = () => {
  return (
    <div className="card relative">
        <div className="img-card">
            <img src="/assets/face.jpg" alt="photo-white" />
        </div>
        <div className="absolute top-0 w-full h-full bg-black/40"></div>
        <div className="absolute bottom-0 py-8 w-full px-6">
            <span className="text-md my-6 tracking-[2px] p-2 uppercase bg-sky-700 text-white font-light">Action</span>
            <h2 className="text-4xl my-8 font-thin text-white">Pulp Fiction</h2>
                <div className="flex items-center">
                <FaPlayCircle size={40} className='text-white mr-8 hover:text-sky-700 duration-1000' />
                <span className="text-white font-light text-md">7 seasons - 2013</span>
        </div>

        </div>
    </div>
  )
}

export default Card