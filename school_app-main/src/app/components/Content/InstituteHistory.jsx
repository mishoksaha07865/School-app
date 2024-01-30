import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHistory } from 'react-icons/fa';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';


const InstituteHistory = () => {
  return (
    <div className="border border-gray-300 p-2 rounded-lg">
        <h3 className="bg-gray-900 text-white p-3 rounded-lg flex gap-2 items-center"><FaHistory/>প্রতিষ্ঠানের ইতিহাস</h3>
        <div className="flex flex-wrap lg:flex-nowrap">
            <Image src="/school.webp" className="rounded-lg m-2 w-[450px] h-[300px]" alt="school" width={500} height={500}/>
            <div className="relative">
            <p className="py-3 px-4 leading-8">সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়... </p>
            <span className="absolute bottom-2 right-2"><Link className="rounded-lg flex  items-center gap-3 w-fit p-2 text-md text-white bg-black" href="/history">Read More<BsFillArrowRightSquareFill/></Link></span>
            </div>
            
        </div>
    </div>
  )
}

export default InstituteHistory