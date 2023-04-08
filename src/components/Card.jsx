import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    // console.log(item)
    const imageLink = `https://image.tmdb.org/t/p/w500`
    console.log(item.poster_path)
  return (
    <Link to={`/details/${item.id}`} className="card group relative">
        <div className="img-card h-[20rem] overflow-hidden">
            <img src={`${imageLink}${item.backdrop_path}`} alt="photo-white" className='w-full group-hover:scale-[1.7] duration-[900ms]  h-full' />
        </div>
        <div className="absolute top-0 w-full h-full bg-black/40"></div>
        <div className="absolute bottom-0 py-8 w-full px-6">
            {/* <span className="text-md my-6 tracking-[2px] p-2 uppercase bg-sky-700 text-white font-light">Action</span> */}
            <h2 className="text-2xl my-8 font-thin text-white">{item.name}</h2>
                <div className="flex items-center">
                <FaPlayCircle size={40} className='text-white mr-8 hover:text-sky-700 duration-1000' />
                {/* <span className="text-white font-light text-md">7 seasons - 2013</span> */}
        </div>

        </div>
    </Link>
  )
}

export default Card