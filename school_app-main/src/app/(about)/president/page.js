import { groq } from 'next-sanity';
import Image from 'next/image'
import React from 'react'
import { client } from '../../../../sanity/lib/client';

async function getData() {
  const query = groq`*[_type == "Quotes"][0]{
    president {
      name,
      description,
      "imgUrl":image.asset->url,
    }
    }`;
 return client.fetch(query)

 
};
const PresidentPage = async () => {
const {president} =await getData();
 
  return (
    <div className="lg:w-[70%] w-[96%] mx-auto min-h-[100vh]  m-2">
    <div className="border border-gray-300 p-2 rounded-lg">
   

    <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>সভাপতির বাণী</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
    <div className="flex flex-center flex-col flex-wrap">
        <Image src={president.imgUrl} className="rounded-lg mx-auto m-2 md:w-[60%] h-[500px] object-contain " alt="school" width={500} height={500}/>
        <p className="text-center text-xl font-bold uppercase">{president.name}</p>
        <p className="py-3 px-4 leading-8 md:w-[60%] mx-auto">{president.description}</p>
    </div>
</div>
</div>
  )
}

export default PresidentPage