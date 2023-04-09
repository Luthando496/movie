import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Slider = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const it = props.it;
      console.log(it);

  const imageLink = `https://image.tmdb.org/t/p/w500`



  return (
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={9000}
  keyBoardControl={true}
  customTransition="all 800ms"
  transitionDuration={800}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{/* <section  key={it.id}  className="w-full min-h-[100vh] py-[7rem] relative" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${imageLink}${it?.backdrop_path})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    <div className="overflow-hidden  w-[80%] mx-auto">
        <h1 className="text-[6rem] font-bold text-red-600 pr-6">{it?.title}</h1>

        <div className="my-12 flex items-center gap-8">
        <div className="flex gap-2">
        <span className="p-6 border-[4px] text-green-500 relative font-semibold text-xl border-gray-700 rounded-full">5.8</span>
        <h3 className="text-xl self-center text-white font-thin">IMDB SCORE</h3>
        </div>

        <h3 className="font-bold text-white text-xl">{it?.release_date}</h3>

        <span className="border border-red-600 text-teal-500 flex gap-2 pl-2 text-md">
          1080
          <span className="bg-red-600 h-full px-2 font-bold text-white">HD</span>
        </span>

        </div>

        <p className="font-light text-xl text-white pr-10">{it?.overview}</p>
      <div className="mt-12 flex gap-8 items-center">

      <button className="text-xl uppercase bg-black px-6 hover:bg-white hover:border hover:text-black duration-700 py-4 text-white">+ Add Your List</button>


      </div>
      </div>


 </section> */}

</Carousel>
  )
}

export default Slider