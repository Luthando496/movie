import React from 'react'

const Details = () => {
  return (
    <section className='bg-white w-full py-[9rem]'>
    <div className="w-[90%] mx-auto">
    <div className="w-full flex flex-col lg:grid grid-cols-3 gap-8">
      {/*  */}

      <div className="p-3 col-span-2"></div>
      {/*  */}
      <div className="col-span-1">
      <div className="w-full border border-sky-400 px-6 py-8">
      <div className="img h-[25rem] w-full">
        <img src="https://images.pexels.com/photos/2220319/pexels-photo-2220319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full' alt="" />
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-8 gap-8">
        <h3 className="text-xl font-semibold">Initial release: </h3> <p className="text-md font-light">Sept 16, 2020</p>
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-1 gap-8">
        <h3 className="text-xl font-semibold">Director: </h3> <p className="text-md font-light">Carles Torras</p>
      </div>
      <div className="grid grid-cols-2 items-baseline mb-4 mt-1 gap-8">
        <h3 className="text-xl font-semibold">Production: </h3> <p className="text-md font-light">MovieFlix</p>
      </div>

      </div>

      </div>


    </div>

    </div>

    </section>
  )
}

export default Details