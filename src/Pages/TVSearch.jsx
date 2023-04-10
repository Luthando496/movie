import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies, searchTVShows } from '../store/action/actions'
import MovieCard from '../components/MovieCard'
import RingLoader from 'react-spinners/RingLoader'
import Card from '../components/Card'




const TVSearch = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const {tvShows,loading} = useSelector(state => state.movie)



    const Submit =(e)=>{
        e.preventDefault();
        console.log(search)
        dispatch(searchTVShows(search))
        

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

    <div className=" py-20 bg-black">


    {loading ? <RingLoader fill='#023688' loading={loading} size={200} /> :
    (<div className="my-10 w-[90%] mx-auto flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/*  */}
            {tvShows?.results?.map((item,index)=>(
                <Card key={index} item={item}  />
            ))}

    </div>)}

    </div>

    </>
  )
}

export default TVSearch






    

    
