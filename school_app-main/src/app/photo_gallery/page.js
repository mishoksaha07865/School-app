import Image from 'next/image'
import React from 'react'
import StudentsData from "../components/Student/studentsData"
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import FilterGallery from '../components/Gallery/FilterGallery';
import GalleryImage from '../components/Gallery/GalleryImage';
import GalleryMain from '../components/Gallery/GalleryMain';


async function getData() {
  const query = groq`*[_type == "gallery"]{
    "imageUrl": image.asset->url,
    title
    }`;
 return client.fetch(query)

 
};


const PhotoPage = async () => {
  const photoData = await getData();
  return (
    <div className="flex flex-wrap w-[96%] justify-center items-center md:w-[90%] py-5 mx-auto ">
  <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>ফটো গ্যালারী</span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>

    <GalleryMain photoData={photoData}/>

   
</div>
  )
}

export default PhotoPage