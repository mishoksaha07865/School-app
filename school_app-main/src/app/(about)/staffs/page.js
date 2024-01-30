import React from 'react'
import Image from 'next/image'
import { groq } from 'next-sanity';
import Staffs from '@/app/components/Staffs';
import { client } from '../../../../sanity/lib/client';
async function getData() {
  const query = groq`*[_type == "staffs"]{
    "imageUrl": image.asset->url,
    name,
    designation,
    phone,
    slug,
    }`;
 return client.fetch(query)

 
};
const StaffPage = async () => {
  const StaffsData = await getData();
     return (
    <div className="lg:w-[80%] w-[97%] mx-auto">
         <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>কর্মচারীবৃন্দ</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
        <div>
            <Staffs staffs={StaffsData}/>
        </div>
    </div>
  )
}

export default StaffPage