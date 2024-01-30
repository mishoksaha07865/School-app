import React from 'react'

const FilterGallery = ({collection,photoData,setData,gallery_filter}) => {
  return (
    <div className="filterItem bg-red-500 w-full">
    <div className="flex gap-6 text-white w-[90%] mx-auto justify-center items-center my-2 p-4">
      <p><button onClick={()=> setData(photoData)}>All</button></p>
      {
        collection.map((item)=> <p key={item}><button onClick={()=>{gallery_filter(item)}}>{item}</button></p>)
      }
    </div>
  </div>
  )
}

export default FilterGallery