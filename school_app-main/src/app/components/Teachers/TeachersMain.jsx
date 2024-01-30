import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TeachersMain = ({teacher}) => {
  return (
    <div className="w-full"> <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>আমাদের শিক্ষক মন্ডলী </span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
    
    <section className="text-gray-600 body-font">
      <div className=" flex px-5 py-2 gap-4 flex-wrap justify-center items-center">
      
      
          {/* Repeat this block for each team member */}
          {
            teacher.map((single,ind)=>{
              return(
                <>
                   <div className="shadow-black xl:w-[23%] lg:w-[30%] md:w-[45%] shadow-lg rounded-lg">
            <div className="h-full flex flex-col items-center text-center">
              {/* Replace the <img> tag with Image component */}
              <Image
                src={single.imageUrl}
                alt="team"
                width={400} // Set the desired width
                height={300} // Set the desired height
                className="flex-shrink-0 rounded-t-lg object-cover h-[250px] object-center mb-4"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">{single.name}</h2>
                <h3 className="text-gray-500 mb-3">{single.subject}</h3>
                <p className="mb-4 p-3">{single.phone}</p>
               
              </div>
            </div>
          </div>
                </>
              )
            })
          }
        
          {/* Repeat this block for each team member */}
       
       
        
      </div><div className="p-3 text-xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-1 rounded-lg">
      <Link href="teachers" className="bg-black p-3 text-white px-7 rounded-lg">বিস্তারিত</Link></div>
    </section>
    
    
    </div>


    
  )
}

export default TeachersMain