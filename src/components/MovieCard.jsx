import React from 'react'
import {Link} from 'react-router-dom'




const MovieCard = ({item}) => {

    const imageLink = `https://image.tmdb.org/t/p/w500`
  return (
    <Link to={`/details/${item.id}`} className="card relative group">
                    <div className="img-card h-[15rem] overflow-hidden">
                        <img src={`${imageLink}${item.poster_path}`} alt="photo-white" className='h-full group-hover:scale-150 duration-[900ms]  w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">Movie</span>
                        <span className="text-md text-white">{item.release_date}</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">{item.title}</h4>
                    

            </Link>
  )
}

export default MovieCard