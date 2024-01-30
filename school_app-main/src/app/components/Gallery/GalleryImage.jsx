import Image from 'next/image'
import React from 'react'

const GalleryImage = ({photoData,img,setImg}) => {

  const viewImage = (img,i)=>{
    setImg({img,i});
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
    {photoData.map((menu , i)=>{
      return(<>
  <div className="rounded-lg mb-3 shadow-xl xl:w-[400px] md:w-[420px] bg-white w-[350px] xl:h-[400px] md:h-[400px] h-[350px] gap-y-4 relative overflow-hidden mx-auto">
      
          <div className=" transition duration-300 ease-in-out hover:scale-110" >  
       <Image onClick={()=> viewImage(menu.imageUrl , i )} src={menu.imageUrl} width={1000} height={500} alt={menu.title}  className="card-image h-[400px] md:min-h-[400px] object-cover min-w-[400px] md:min-w-[450px] rounded-t-lg"/> </div>
       
      
   </div>
   </>)
  })}
  </div>
  )
}

export default GalleryImage