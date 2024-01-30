
import Image from 'next/image'
import React from 'react'
import Result from '../components/Result';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';

async function getData() {
  const query = groq`*[_type == "result"]{
    "fileUrl": file.asset->url,
    title,
    date,
    class
    }`;
 return client.fetch(query)

 
};
const ResultPage = async () => {
    const result = await getData();
    const data = [
        {
            date:"12-09-2015",
            title:"Final Exam Routin",
            class:"SIX",
            view:"view"
        },
        {
            date:"12-08-2015",
            title:"Final Exam Routin 2",
            class:"EIGHT",
            view:"view"
        },
        {
            date:"12-08-2015",
            title:"Final Exam Routin 2",
            class:"NINE",
            view:"view"
        },
        {
            date:"12-08-2015",
            title:"Final Exam Routin 2",
            class:"TEN",
            view:"view"
        },
    ]
    
  return (
    <div className="border-2  border-gray-200 rounded-lg p-2 my-3 lg:w-[80%] w-[100%] mx-auto min-h-[70vh]">
         <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>ফলাফল</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>

         <div>
            <Result data={result}/>
           

         </div>
    </div>
  )
}

export default ResultPage