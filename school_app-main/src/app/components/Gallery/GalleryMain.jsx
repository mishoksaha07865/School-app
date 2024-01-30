'use client'
import React, { useEffect, useState } from 'react'
import FilterGallery from './FilterGallery'
import GalleryImage from './GalleryImage'
import Image from 'next/image'

const GalleryMain = ({photoData}) => {

    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);

    const imgArray = photoData.map((item,i)=>item.imageUrl);
    console.log(imgArray)
    const [imgdata , setImgdata] = useState({img:"",i:0});
    
    const imgAction = (action)=>{
      let i =  imgdata.i;
      if(action === "next-img"){
        setImgdata({img:imgArray[i+1],i:i+1});
      }
      if(action === "prev-img"){
        setImgdata({img:imgArray[i-1],i:i-1});
      }
    }
    useEffect(()=>{
      setData(photoData);
      setCollection([... new Set(photoData.map((item)=> item.title))])
    },[]) 
  
    const gallery_filter = (itemData) =>{
      const filterData = photoData.filter((item)=> item.title == itemData);
      setData(filterData);
    }
  
  return (
   <> 
   {imgdata.img && 
      <div className="w-[100%] h-[100vh] bg-black absolute flex justify-center items-center z-50">
        <span onClick={()=>setImgdata({img:"",i:0})} className="absolute text-white font-semibold text-4xl top-10 cursor-pointer right-10">x</span>
        <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold mr-3" onClick={()=> imgAction("prev-img")} > Prev</button>
          <Image src={imgdata.img} className="w-[70%] sm:w-[70%] md:max-w-[90%] md:max-h-[80%] object-contain " alt="gallery Image" width={1000} height={1000} />
          <button className="bg-white sm:p-2 p-1 text-lg sm:text-2xl rounded-lg font-semibold ml-3" onClick={()=> imgAction("next-img")}>Next</button>
        </div>} 

        {!imgdata.img &&      
   <><FilterGallery collection={collection} setData={setData} gallery_filter={(e)=>gallery_filter(e)} photoData={photoData} />
   <div className="flex flex-col mt-2">
    <div className=" ">
   
   </div>
    <GalleryImage photoData={data} img={imgdata} setImg={setImgdata}/>
    </div></>}</>
  )
}

export default GalleryMain