import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSingleMovie,fetchSingleTV } from '../store/action/actions'
import Navbar from '../components/Navbar'



const TVDetails = () => {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movie.single)

  const id = useParams().id
  let dollarUSLocale = Intl.NumberFormat('en-US');


  useEffect(()=>{
    dispatch(fetchSingleTV(id))
  },[dispatch])

  const imageLink = `https://image.tmdb.org/t/p/w500`



  return (
    <>
    <Navbar />



    <section className="w-full min-h-[100vh] py-[7rem] relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${imageLink}${movie?.backdrop_path})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
    {/* <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div> */}
    <div className="overflow-hidden  w-[80%] mx-auto">
        <h1 className="text-[6rem] font-bold text-red-600 pr-6">{movie?.title}</h1>

        <div className="my-12 flex items-center gap-8">
        <div className="flex gap-2">
        <span className="p-6 border-[4px] text-green-500 relative font-semibold text-xl border-gray-700 rounded-full">5.8</span>
        <h3 className="text-xl self-center text-white font-thin">IMDB SCORE</h3>
        </div>

        <h3 className="font-bold text-white text-xl">{movie?.release_date}</h3>

        <span className="border border-red-600 text-teal-500 flex gap-2 pl-2 text-md">
          1080
          <span className="bg-red-600 h-full px-2 font-bold text-white">HD</span>
        </span>

        <h4 className="text-sky-500 text-xl font-semibold">{movie?.genres[0]?.name}, {movie?.genres[1]?.name}</h4>

        </div>

        <p className="font-light text-xl text-white pr-10">{movie?.overview}</p>
      <div className="mt-12 flex gap-8 items-center">

      <button className="text-xl uppercase bg-black px-6 hover:bg-white hover:border hover:text-black duration-700 py-4 text-white">+ Add Your List</button>

      <h2 className="text-xl font-bold text-rose-800">$ {movie?.budget}</h2>

      </div>
      </div>


    </section>


    <section className='bg-white w-full py-[9rem]'>
    <div className="w-[90%] mx-auto">
    <div className="w-full flex flex-col lg:grid grid-cols-3 gap-[2rem]">

      {/*  */}
      <div className="col-span-2 overflow-hidden">
        <h1 className="text-[6rem] font-bold text-black pr-6">{movie?.title}</h1>

        <div className="my-12 flex items-center gap-8">
        <div className="flex gap-2">
        <span className="p-6 border-[4px] relative font-semibold text-xl border-gray-700 rounded-full">{movie?.vote_average}</span>
        <h3 className="text-xl self-center font-thin">IMDB SCORE</h3>
        </div>

        <h3 className="font-bold  text-xl">{movie?.release_date}</h3>

        <span className="border border-black flex gap-2 pl-2 text-md">
          1080
          <span className="bg-black h-full px-2 font-bold text-white">HD</span>
        </span>

        <h4 className="text-sky-500 text-xl font-semibold">{movie?.genres[0]?.name}, {movie?.genres[1]?.name}</h4>

        </div>

        <p className="font-light text-xl pr-10">{movie?.overview}</p>
      <div className="mt-12 flex gap-8 items-center">

      <button className="text-xl uppercase bg-black px-6 hover:bg-white hover:border hover:text-black duration-700 py-4 text-white">+ Add Your List</button>


      </div>
      </div>

      {/* grid col 2   */}

      <div className="col-span-1 w-[80%] mx-auto  lg:w-full">
      <div className="w-full border border-sky-200 px-6 py-8">
      <div className="img h-[25rem] w-full">
        <img src={`${imageLink}${movie?.poster_path}`} className='w-full h-full' alt="movie-poster" />
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-8 gap-8">
        <h3 className="text-xl font-semibold">Initial release: </h3> <p className="text-md font-light">{movie?.release_date}</p>
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-1 gap-8">
        <h3 className="text-xl font-semibold">Director: </h3> <p className="text-md font-light">Carles Torras</p>
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-1 gap-8">
        <h3 className="text-xl font-semibold">Production: </h3> <p className="text-md font-light">MovieFlix</p>
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-1 gap-8">
        <h3 className="text-xl font-semibold">Screenplay: </h3> <p className="text-md font-light"> Carles Torras</p>
      </div>

      </div>

      </div>


    </div>

    </div>

    </section>

    </>
  )
}

export default TVDetails