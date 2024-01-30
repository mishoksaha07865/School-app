import React from 'react'
import Image from 'next/image'
import Student from '@/app/components/Student/Student'
import StudentsData from '@/app/components/Student/studentsData'
import Members from '@/app/components/Members'
import { client } from '../../../../sanity/lib/client'
import { groq } from 'next-sanity'


async function getData() {
    const query = groq`*[_type == "committee"]{
   
        name,
        designation,
        phone,
        slug,
        "imgUrl":image.asset->url,
      }`;
   return client.fetch(query)
  
   
  };
const CommitteePage = async () => {
    const members =await getData();
  return (
    <div className="lg:w-[80%] w-[97%] mx-auto min-h-[70vh] border-2 border-gray-300 m-2 p-2">
    <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>কমিটি </span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
    
    <div className='px-5'>
      
        <Members members={members}/>
    </div>
</div>
  )
}

export default CommitteePage