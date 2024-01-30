'use client'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "/bd.png";
const HeroSlider1 = ({data}) => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {data.map((item,ind)=>{
            return (<div className="embla__slide" key={item.title+ind}>
            <div style={{ backgroundImage: `url(${item.imageUrl})` }} className={`bg-cover object-fit bg-center h-[70vh] relative flex justify-center items-center `}><p className="md:text-4xl text-xl absolute bottom-10 text-white font-bold bg-gray-900 opacity-75 md:p-4 p-2">{item.title}</p></div>
          </div>)
          })}
        




          {/* <div className="embla__slide"><div className={`bg-red-900  h-[70vh] flex justify-center items-center`}>hello 2</div></div>
          <div className="embla__slide"><div className={`bg-green-900 h-[70vh] flex justify-center items-center`}>hello 3</div></div> */}
        </div>
      </div>

    )
}

export default HeroSlider1