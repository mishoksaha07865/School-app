import React from 'react'
import Teachers from '../components/Teachers/Teachers'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client';
import { groq } from 'next-sanity';
import Link from 'next/link';
async function getData() {
  const query = groq`*[_type == "teacher"]{
    "imageUrl": image.asset->url,
    name,
    subject,
    phone,
    slug,
    }`;
 return client.fetch(query)

 
};
const Page = async () => {
  const TeachersData = await getData();
     return (
    <div className="lg:w-[80%] w-[97%] mx-auto">
         <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>শিক্ষকমন্ডলী</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
        <div>
            <Teachers teachers={TeachersData}/>
        </div>
    </div>
  )
}

export default Page