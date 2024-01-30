import Image from 'next/image'
import React from 'react'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../SolaimanLipiRegular.ttf',
  display:'swap',
})
 

const Logo = () => {
  return (
    
    <div className={`${myFont.className} flex justify-between items-center px-[10px] xl:px-[250px] p-2 md:h-[300px] min-h-[190px] bg-blue-900`}>
        
        <Image src="/bdg.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" alt={"bangladesh"} width={100} height={100}/>
        <div className="">
            <p className="text-white lg:text-6xl md:text-5xl sm:text-3xl text-lg  text-center">শ্রীফলিয়া উচ্চ বিদ্যালয়</p>
            <p className="text-center text-white leading-8 md:text-2xl sm:text-md text-sm md:py-3 py-1">২নং পেরিয়া, নাঙ্গলকোট, কুমিল্লা</p>
            <p className="text-center md:text-lg sm:text-md text-md text-white ">স্থাপিতঃ ১২-১২-২০২১ ইং কোড নং- ১০৬০৯৯</p>
        </div>
        <Image src="/bd.png" className="md:w-[150px] w-[70px] h-[70px] md:h-[150px]" alt={"bangladesh"} width={100} height={100}/>
    </div>
     
  )
}

export default Logo