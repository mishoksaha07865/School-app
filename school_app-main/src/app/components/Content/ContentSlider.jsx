import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {PiMicrophoneStageDuotone} from "react-icons/pi"
const ContentSlider = ({item}) => {
  
  return (
    <>
    
     <div className="flex  border-2 border-gray-300 rounded-lg flex-col">
     <p className="md:text-xl text-md font-bold py-2 mr-2 px-2 rounded-lg bg-gray-800 text-white w-full flex items-center gap-3"><PiMicrophoneStageDuotone/>{item.title}</p>
     <div className="flex ">
     <div className="flex-shrink-0 mr-2 flex justify-center items-center md:justify-start md:items-start">
     <Image src={item.imgUrl} className="rounded-lg m-2 w-[180px] h-[200px] object-cover block" alt="school" width={200} height={150}/>
     </div>
     <div className="md:flex-grow mt-2 px-2 pb-2">
       
       <p className="text-lg text-gray-800 font-bold tracking-wider">{item.name}</p>
       <p className="text-gray-600">{item.description.slice(0,145)}... </p>
       {item.title=="অধ্যক্ষের বাণী"?<Link href={"/principle"}>read more</Link>:<Link href={"/president"}>read more</Link>}
     </div>
    </div>
   </div>
   </>
  )
}

export default ContentSlider