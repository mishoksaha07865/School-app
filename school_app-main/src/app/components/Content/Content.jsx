'use client'
import React, { useState } from 'react'
import InstituteHistory from './InstituteHistory'
import ContentSlider from './ContentSlider'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import MujibCorner from './MujibCorner';
import Link from 'next/link';
const Content = ({qoute}) => {
  const [qoute1,setQoute1]= useState(qoute)
 
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <>
    <div><InstituteHistory/>
    <div className="embla2">
  <div className="embla__viewport" ref={emblaRef}>
    <div className="my-3 embla__container2">
      {
        qoute1.map((item,ind)=>{
          console.log(item.name)
          return(
            <div key={ind} className="embla__slide2"><ContentSlider item={item} /></div>
          )
        })
      }
      

      {/* <div className="embla__slide2"><ContentSlider/></div>
      <div className="embla__slide2"><ContentSlider/></div> */}
    </div>
    </div>
  </div>
    <Link href="mujib_cornar"><MujibCorner/></Link>
    </div>
    </>
  );
}

export default Content
