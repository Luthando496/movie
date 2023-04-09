import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../store/action/actions'
import MovieCard from '../components/MovieCard'

const Movies = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state.movie)



    const Submit =(e)=>{
        e.preventDefault();
        console.log(search)
        dispatch(searchMovies(search))
        

    }

    

  return (
    <>
    <Navbar />
    <div className="w-full py-20 bg-stone-300">
    <form onSubmit={Submit} className="flex justify-center items-center">
        <input type="text" onChange={(e)=> setSearch(e.target.value)} value={search} required className='px-8 focus:outline-none  duration-700 py-4 text-md md:text-2xl font-thin text-gray-800' placeholder='search any movie' />
        <button className="text-md md:text-2xl font-bold bg-sky-700 text-white py-4 px-8">Search</button>
    </form>

    </div>

    <div className="w-[90%] mx-auto py-20 bg-stone-300">
    <div className="my-10 mx-4 md:mx-0 flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {/*  */}
            {movies?.results?.map((item,index)=>(
                <MovieCard key={index} item={item}  />
            ))}

    </div>

    </div>

    </>
  )
}

export default Movies