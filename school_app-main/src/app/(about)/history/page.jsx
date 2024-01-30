import Image from 'next/image'
import React from 'react'

const HistoryPage = () => {
  return (
    <div className="lg:w-[70%] w-[96%] mx-auto min-h-[100vh]  m-2">
        <div className="border border-gray-300 p-2 rounded-lg">
       

        <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>প্রতিষ্ঠানের ইতিহাস</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
        <div className="">
            <Image src="/school.webp" className="rounded-lg m-2 w-full h-fit" alt="school" width={500} height={500}/>
            <p className="py-3 px-4 leading-8">সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়, ধর্মভীরুতায়.সামাজিক আচার-অনুষ্ঠানে এ জনপদের অন্য সবের উপর রয়েছে এ পরিবারের অতুলনীয় সম্মান। যতদূর জানা যায় মরহুম দেলওয়ার খান ছিলেন এ পরিবারের একজন শিক্ষিত ব্যক্তি ।তিনি যেমন ছিলেন শিক্ষানুরাগী তেমনটি ধর্মানুরাগী এবং পরহেযগার। তাঁর দুই ছেলে সন্তান বড় ছেলের নাম মুজাম্মিল খান এবং ছোট ছেলের নাম মাহমুদ খান। ।</p>
        </div>
    </div>
    </div>
  )
}

export default HistoryPage