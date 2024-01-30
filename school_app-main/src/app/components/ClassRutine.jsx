import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ClassRutine = ({rutine}) => {
  return (
    <>
    <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>ক্লাশ রুটিন </span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
    <div className="md:w-[80%] flex flex-wrap gap-5 justify-center items-center py-6">

    {rutine.map((item,ind)=>{
            return (<Link key={item.fileUrl} href={item.fileUrl} target="_blank"><div className="bg-gray-300 text-black shadow-lg shadow-gray-800 rounded-lg  flex flex-col gap-5 justify-center items-center text-2xl cursor-pointer p-10 min-w-[300px] min-h-[150px]"><Image src="/class.png" alt="" width={100} height={100} /> {item.class} <p>{item.shift}</p></div></Link>)
    })}
    </div>
    </>
  )
}

export default ClassRutine
//