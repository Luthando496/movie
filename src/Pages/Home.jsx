import React from 'react'
import {FaPlayCircle,FaTimes} from 'react-icons/fa'
import {GoCheck} from 'react-icons/go'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../components/Card';


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
                <Card />
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
    <section className=" bg-black  py-[5rem]">
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

    {/* <Swiper
    
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
    //   navigation
      direction='vertical'
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full h-[60vh] bg-emerald-300'
    >
      <SwiperSlide  className='w-full h-full bg-emerald-300' >
        <img src="blob:https://manage.wix.com/7ba5e2ce-d6c0-443f-b7eb-e63cb086d4b7" className='w-full h-full' alt="" />
      </SwiperSlide>
      <SwiperSlide  className='w-full h-full bg-emerald-300' >Slide 2</SwiperSlide>
      <SwiperSlide  className='w-full h-full bg-emerald-300' >Slide 3</SwiperSlide>
      <SwiperSlide  className='w-full h-full bg-emerald-300' >Slide 4</SwiperSlide>
    </Swiper> */}

    <section className="w-full bg-gray-200 py-28">
        <div className="container mx-auto">
            <h1 className=" text-[3rem] text-center text-sky-700 font-semibold capitalize">Start Your Free Trail</h1>
            <p className="text-center text-xl font-semibold text-black">Choose from annual or monthly plans.<br /> Switch or cancel anytime.</p>

            <div className="mt-[4rem] flex flex-col justify-center items-center md:items-baseline md:justify-normal space-y-12 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:gap-8">
                {/* card */}
                <div className="rounded-2xl border-sky-600 border-[8px]  bg-black/90">
            {/* card header */}
            <div className="card-header py-6 text-center  ">
                <h1 className="text-3xl text-white font-bold">HD+ Package</h1>
                <p className="text-white font-light text-md">Premium package streaming</p>
            </div>
            {/* card price */}
            <div className="text-center py-6 font-bold ">
                <h1 className="text-5xl text-green-600">$4</h1>
                <p className="font-light text-white text-md">Monthly</p>
            </div>
            {/* list */}
            <ul className="py-2 flex flex-col px-6">
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">No Ads</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">Access to full library with thousands of movie</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> HD+ Quality Streaming</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-xl text-white' />
                    <p className="text-md font-light text-white"> Watch on any device</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <FaTimes className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> Stream on 1 device at a time</p>
                </li>
                <li className="py-4 flex gap-4 ">
                    <FaTimes className='text-xl text-gray-300' />
                    <p className="text-md font-light text-white">Offline Viewing</p>
                </li>

            </ul>
            <div className="flex justify-center w-full py-[1rem] ">
                <button className="py-4 hover:bg-amber-500 duration-700  text-white  bg-sky-600 text-md font-bold px-6">Start your free Trial</button>
            </div>
            <div className="text-center mb-6 text-white font-light">*No credit card required</div>
            

            </div>
            {/*  */}
            <div className="rounded-2xl border-sky-600 border-[8px]  bg-black/90">
            {/* card header */}
            <div className="card-header py-6 text-center  bg-sky-300 rounded-t-lg">
                <h1 className="text-3xl text-white font-bold">HD+ Package</h1>
                <p className="text-white font-light text-md">Premium package streaming</p>
            </div>
            {/* card price */}
            <div className="text-center py-6 font-bold ">
                <h1 className="text-5xl text-green-600">$4</h1>
                <p className="font-light text-white text-md">Monthly</p>
            </div>
            {/* list */}
            <ul className="py-2 flex flex-col px-6">
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">No Ads</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">Access to full library with thousands of movie</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> HD+ Quality Streaming</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-xl text-white' />
                    <p className="text-md font-light text-white"> Watch on any device</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <FaTimes className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> Stream on 1 device at a time</p>
                </li>
                <li className="py-4 flex gap-4 ">
                    <FaTimes className='text-xl text-gray-300' />
                    <p className="text-md font-light text-white">Offline Viewing</p>
                </li>

            </ul>
            <div className="flex justify-center w-full py-[1rem] ">
                <button className="py-4 hover:bg-sky-900 duration-700 hover:text-pink-500 text-white rounded-2xl bg-cyan-600 text-2xl font-bold px-6">Start your free Trial</button>
            </div>
            <div className="text-center mb-6 text-white font-light">*No credit card required</div>
            

            </div>
            {/*  */}

            <div className="rounded-2xl border-sky-600 border-[8px]  bg-black/90">
            {/* card header */}
            <div className="card-header py-6 text-center">
                <h1 className="text-3xl text-white font-bold">HD+ Package</h1>
                <p className="text-white font-light text-md">Premium package streaming</p>
            </div>
            {/* card price */}
            <div className="text-center py-6 font-bold ">
                <h1 className="text-5xl text-green-600">$4</h1>
                <p className="font-light text-white text-md">Monthly</p>
            </div>
            {/* list */}
            <ul className="py-2 flex flex-col px-6">
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">No Ads</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white">Access to full library with thousands of movie</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> HD+ Quality Streaming</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <GoCheck className='text-xl text-white' />
                    <p className="text-md font-light text-white"> Watch on any device</p>
                </li>
                <li className="py-4 flex gap-4 border-b">
                    <FaTimes className='text-2xl text-white' />
                    <p className="text-md font-light text-white"> Stream on 1 device at a time</p>
                </li>
                <li className="py-4 flex gap-4 ">
                    <FaTimes className='text-xl text-gray-300' />
                    <p className="text-md font-light text-white">Offline Viewing</p>
                </li>

            </ul>
            <div className="flex justify-center w-full py-[1rem] ">
                <button className="py-4 hover:bg-sky-900 duration-700 hover:text-pink-500 text-white rounded-2xl bg-cyan-600 text-2xl font-bold px-6">Start your free Trial</button>
            </div>
            <div className="text-center mb-6 text-white font-light">*No credit card required</div>
            

            </div>

            </div>
            </div>
    </section>


    <section className="w-full bg-black py-28 text-center space-y-12">
        <h1 className="text-white text-4xl md:text-[4rem] capitalize tracking-[2px] font-semibold">Watch movie</h1>
        <h1 className="text-white text-4xl md:text-[4rem] capitalize tracking-[2px] font-semibold">everywhere, anytime.</h1>
        <p className="text-white leading-widest font-light text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br /> nec ullamcorper mattis, pulvinar dapibus leo.</p>

        <div className="flex justify-center">
            <button className="py-4 px-8 bg-cyan-600 text-white font-light text-3xl tracking-[2px] hover:bg-sky-900 duration-700">Discover More</button>
        </div>

    </section>


    <section className="section bg-white py-32 text-center w-full">
        <h1 className="text-sky-500 text-5xl font-semibold">Video For Everyone</h1>
        <div className="my-4 bg-orange-600 flex h-[2px] justify-center w-[10rem] mx-auto"></div>

        <div className="mt-28 flex flex-col justify-center md:grid md:justify-normal md:grid-cols-2 gap-6 lg:grid-cols-4 container mx-auto">

            {/* card */}
            <div className="flex group  flex-col text-center text-white w-full rounded-xl bg-gray-700">
            <div className="img h-[10rem] w-full">
                <img src="https://images.pexels.com/photos/3820120/pexels-photo-3820120.jpeg?auto=compress&cs=tinysrgb&w=600" alt="family-photo" className='w-full h-full object-cover rounded-t-xl' />
            </div>
            <div className="px-6">
                <h1 className="text-3xl font-semibold group-hover:text-emerald-400 duration-[300ms] my-6">Family Movies</h1>
                <p className="text-xl font-thin leading-[1.7] mb-4">Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna</p>
            </div>
            </div>
            {/*  */}
            <div className="flex group  flex-col text-center text-white w-full rounded-xl bg-gray-700">
            <div className="img h-[10rem] w-full">
                <img src="https://images.pexels.com/photos/4144830/pexels-photo-4144830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="family-photo" className='w-full h-full object-cover rounded-t-xl' />
            </div>
            <div className="px-6">
                <h1 className="text-3xl font-semibold group-hover:text-emerald-400 duration-[300ms] my-6">Teen Movies</h1>
                <p className="text-xl font-thin leading-[1.7] mb-4">Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna</p>
            </div>
            </div>
            {/*  */}
            <div className="flex group  flex-col text-center text-white w-full rounded-xl bg-gray-700">
            <div className="img h-[10rem] w-full">
                <img src="https://images.pexels.com/photos/754769/pexels-photo-754769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="family-photo" className='w-full h-full object-cover rounded-t-xl' />
            </div>
            <div className="px-6">
                <h1 className="text-3xl font-semibold group-hover:text-emerald-400 duration-[300ms] my-6">Kids Movies</h1>
                <p className="text-xl font-thin leading-[1.7] mb-4">Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna</p>
            </div>
            </div>
            {/*  */}
            <div className="flex group  flex-col text-center text-white w-full rounded-xl bg-gray-700">
            <div className="img h-[10rem] w-full">
                <img src="https://images.pexels.com/photos/2820819/pexels-photo-2820819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="family-photo" className='w-full h-full object-cover rounded-t-xl' />
            </div>
            <div className="px-6">
                <h1 className="text-3xl font-semibold group-hover:text-emerald-400 duration-[300ms] my-6">Sport Movies</h1>
                <p className="text-xl font-thin leading-[1.7] mb-4">Facilisis fermentum erat nec platea venenatis massa malesuada nibh maecenas congue magna</p>
            </div>
            </div>
            {/*  */}



        </div>

    </section>



    <section className="py-32 w-full premium">

    <div className="container mx-auto">
        <h1 className="text-white text-bold mx-4 leading-[1.2] text-[4rem]">The best movie and <br />video on your home.</h1>
        <p className="text-white text-xl my-6 mx-4 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus<br /> nec ullamcorper mattis, pulvinar dapibus leo.</p>

        <button className="my-2 mx-6 bg-rose-500 text-white text-2xl font-light px-6 py-4">Go Premium</button>
    </div>

    </section>
    </>
  )
}

export default Home