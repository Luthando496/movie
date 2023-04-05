import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'



const Home = () => {
  return (
    <>



    {/* Online Streaming */}
    <section className="container mx-auto online  py-10">

            <h3 className="uppercase text-xl font-bold text-gray-500">Online Streaming</h3>
            <h1 className="my-8 text-[3rem] font-semibold capitalize">Watch Shows Online</h1>

            <div className="my-10 mx-2 md:mx-0 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card relative">
                    <div className="img-card">
                        <img src="/assets/road-2.jpg" alt="photo-white" />
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black/40"></div>
                    <div className="absolute bottom-0 py-8 w-full px-6">
                        <span className="text-md my-6 tracking-[2px] action p-2 uppercase bg-sky-700 text-white font-light">Comedy</span>
                        <h2 className="text-4xl my-8 font-thin text-white">Avangers Endgame</h2>
                        <div className="flex items-center">
                            <FaPlayCircle size={40} className='text-white mr-8 hover:text-sky-700 duration-1000' />
                            <span className="text-white font-light text-md">7 seasons - 2013</span>
                        </div>

                    </div>

                </div>

                {/* //  */}
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
                {/*  */}
                <div className="card relative">
                    <div className="img-card">
                        <img src="/assets/road.jpg" alt="photo-white" />
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black/40"></div>
                    <div className="absolute bottom-0 py-8 w-full px-6">
                        <span className="text-md my-6 tracking-[2px] p-2 uppercase bg-sky-700 text-white font-light">History</span>
                        <h2 className="text-4xl my-8 font-thin text-white">1917</h2>
                        <div className="flex items-center">
                            <FaPlayCircle size={40} className='text-white mr-8 hover:text-sky-700 duration-1000' />
                            <span className="text-white font-light text-md">7 seasons - 2013</span>
                        </div>

                    </div>
                    

                </div>
                {/*  */}

                <div className="card relative">
                    <div className="img-card">
                        <img src="/assets/road-2.jpg" alt="photo-white" />
                    </div>
                    <div className="absolute top-0 w-full h-full bg-black/40"></div>
                    <div className="absolute bottom-0 py-8 w-full px-6">
                        <span className="text-md my-6 tracking-[2px] action p-2 uppercase bg-sky-700 text-white font-light">Action</span>
                        <h2 className="text-4xl my-8 font-thin text-white">Civil War</h2>
                        <div className="flex items-center">
                            <FaPlayCircle size={40} className='text-white mr-8 hover:text-sky-700 duration-1000' />
                            <span className="text-white font-light text-md">7 seasons - 2013</span>
                        </div>

                    </div>

                </div>

            </div>
    </section>

    {/*  */}


    {/*  */}
    <section className=" bg-black  py-10">
        <div className="container mx-auto">

            <h3 className="uppercase text-center text-xl font-bold text-gray-500">Online Streaming</h3>
            <h1 className=" text-[3rem] text-center text-white font-semibold capitalize">Watch Shows Online</h1>

            <div className="my-10 flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {/*  */}
            <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/road-2.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

            </div>

                {/* //  */}
                <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/road.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

                </div>
                {/*  */}
                <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/paint-black.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

                </div>
                {/*  */}

                <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/paint-white.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

                </div>
                {/*  */}
                <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/face.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

                </div>
                {/*  */}

                <div className="card relative">
                    <div className="img-card h-[15rem]">
                        <img src="/assets/car.jpg" alt="photo-white" className='h-full w-full' />
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-md text-gray-700 p-2 border border-gray-700">TV-G</span>
                        <span className="text-md text-white">2020</span>
                    </div>
                    <p className="text-sm text-sky-600">Comedy</p>
                    <h4 className="text-xl my-3 text-white font-bold">Civil War</h4>
                    

                </div>

            </div>
            </div>
    </section>
    </>
  )
}

export default Home