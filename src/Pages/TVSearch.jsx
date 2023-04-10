import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies, searchTVShows } from '../store/action/actions'
import RingLoader from 'react-spinners/RingLoader'
import Card from '../components/Card'
import Pagination from '@mui/material/Pagination'



const TVSearch = () => {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const {tvShows,loading} = useSelector(state => state.movie)
    const [page, setPage] = useState(tvShows?.page || 1)



    const Submit =(e)=>{
        e.preventDefault();
        console.log(search)
        dispatch(searchTVShows(search))
    }


    const handleChange=(e,page)=>{
      console.log(page)
      setPage(page)
    }

    useEffect(()=>{
      dispatch(searchTVShows(search,page))
    },[page])


  return (
    <>
    <Navbar />
    <div className="w-full py-20 bg-stone-300">
    <form onSubmit={Submit} className="flex justify-center items-center">
        <input type="text" onChange={(e)=> setSearch(e.target.value)} value={search} required className='px-8 focus:outline-none  duration-700 py-4 text-md md:text-2xl font-thin text-gray-800' placeholder='search any movie' />
        <button className="text-md md:text-2xl font-bold bg-sky-700 text-white py-4 px-8">Search</button>
    </form>

    </div>

    {loading ? <div className="w-full flex justify-center h-[50vh] mt-16">
    <RingLoader  loading={loading} size={200} className='text-emerald-500' />
    </div> : 
    
    (<div className=" py-20 bg-black">

    <div className="my-10 w-[90%] mx-auto flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/*  */}
            {tvShows?.results?.map((item,index)=>(
                <Card key={index} item={item}  />
            ))}
    </div>

    <Pagination count={tvShows?.total_pages} onChange={handleChange} page={page} variant="outlined" color="primary" className='w-[80%] mx-auto py-[1rem] bg-rose-600'   />

    </div>)}

    </>
  )
}

export default TVSearch






    

    
