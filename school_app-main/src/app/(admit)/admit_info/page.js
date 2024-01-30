import { groq } from 'next-sanity';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { FaFilePdf, FaRegFilePdf } from 'react-icons/fa';

async function getData() {
  const query = groq`*[_type == "admit_info"]{
    title,
    "fileUrl": file.asset->url,
    }`;
 return client.fetch(query)

 
};
const AdmitInfoPage = async () => {
  const admit_info = await getData();
  return (
    <div className="lg:w-[70%] w-[96%] mx-auto  m-2">
    <div className="border border-gray-300 p-2 rounded-lg py-6">
   

    <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>ভর্তি বিজ্ঞপ্তি</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
    <div className="flex gap-3 flex-wrap justify-center items-center">
       {admit_info.map((student,ind)=>{
        return (
          <Link href={student.fileUrl} target="_blank" key={ind}>
             <div className="shadow-black flex flex-wrap shadow-lg rounded-lg ">
            <div className="h-full flex flex-col items-center gap-y-4 text-center w-[300px] py-4">
              {/* Replace the <img> tag with Image component */}
              <FaFilePdf className="text-[90px]  text-red-800" />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">{student.title}</h2>
              </div>
            </div>
          </div>
             </Link>
        )
       })}    
    </div>
</div>
</div>
  )
}

export default AdmitInfoPage