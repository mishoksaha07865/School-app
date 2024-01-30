
import Image from 'next/image'
import React from 'react'
import StudentsData from '../components/Student/studentsData';
import Notice from '../components/Notice';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';


async function getData() {
  const query = groq`*[_type == "notice"]{
    "fileUrl": file.asset->url,
    title,
    date
    }`;
 return client.fetch(query)

 
};

const NoticePage = async () => {
    const data = await getData();
    // const data = [
    //     {
    //         date:"12-09-2015",
    //         title:"Final Exam Routin",
    //         view:"view"
    //     },
    //     {
    //         date:"12-08-2015",
    //         title:"Final Exam Routin 2",
    //         view:"view"
    //     },
    //     {
    //         date:"12-08-2015",
    //         title:"Final Exam Routin 2",
    //         view:"view"
    //     },
    //     {
    //         date:"12-08-2015",
    //         title:"Final Exam Routin 2",
    //         view:"view"
    //     },
    // ]
   
  return (
    <div className="border-2  border-gray-200 rounded-lg p-2 my-3 lg:w-[80%] w-[100%] mx-auto min-h-[70vh]">
         <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>নোটিশ</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>

         <div>
            <Notice data={data}/>
          

         </div>
    </div>
  )
}

export default NoticePage