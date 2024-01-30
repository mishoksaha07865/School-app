import { groq } from 'next-sanity';
import Link from 'next/link'
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import {AiOutlineNotification} from "react-icons/ai"
async function getData() {
  const query = groq`*[_type == "notice"]{
    "fileUrl": file.asset->url,
    title,
    date
    }`;
 return client.fetch(query)

 
};
const Links = async () => {
  const notices = await getData();
  const notice5 = notices?.slice(0,4);
  return (
    <>
    <div id="latest-notices mb-6" className="mb-5 border border-gray-300 rounded-lg">
    <h3 className="text-white rounded-t-lg pl-3 text-lg p-2 bg-blue-900">Latest Notice</h3>
      <ul className="list-none p-1">
        {notice5.map((notice,ind) => (
          <li key={ind} className="mb-1 flex items-center gap-x-5">
            
            <p className="text-sm w-[19%]">{notice.date}</p>
            <h2 className="text-md font-bold w-[45%] ">{notice?.title?.slice(0,22)}...</h2>
            
            <Link href={notice.fileUrl} target="_blank" className="py-1 px-3 bg-lime-500 cursor-pointer text-md hover:bg-green-700   rounded-md text-white ">
              Read more
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/notice" className="underline my-4">See All Notices</Link>
    </div>
    <div className="mb-3">
        <h3 className="text-white rounded-t-lg pl-3 text-lg p-2 bg-blue-900">গুরুত্বপুর্ণ লিঙ্ক</h3>
        <div className="bg-gray-300 rounded-b-lg">
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/notice" className="">নোটিশ</Link></li> 
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/result">ফলাফল</Link></li> 
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/admit_info">ভর্তি তথ্য</Link></li>
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/admit_form">ভর্তি ফরম</Link></li>
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/photo_gallery">ফটো গ্যালারী</Link></li>
        </div>
    </div>
    <div className="mb-3">
        <h3 className="text-white rounded-t-lg pl-3 text-lg p-2 bg-blue-900">অফিসিয়াল লিঙ্ক</h3>
        <div className="bg-gray-300 rounded-b-lg">
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="https://comillaboard.portal.gov.bd/" target="_blank" className="">কুমিল্লা শিক্ষা বোর্ড</Link></li> 
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="https://dshe.gov.bd/" target="_blank">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা অধিদপ্তর</Link></li> 
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="https://moedu.gov.bd/" target="_blank">শিক্ষা মন্ত্রনালয়</Link></li> 
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="https://web.comillaboard.gov.bd/bisecb" target="_blank">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড</Link></li>
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/">ভর্তি ফরম</Link></li>
           <li className="list-none py-2 px-4 text-lg hover:bg-gray-800 hover:text-white cursor-pointer border-b-2 border-white"><Link href="/">ফটো গ্যালারী</Link></li>
        </div>
    </div>
    </>
  )
}

export default Links