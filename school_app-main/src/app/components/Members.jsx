import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Members = ({members}) => {
  return (
    <div className="flex flex-wrap gap-3 gap-y-3 justify-center items-center">
    {members.map((student,ind)=>{
     return (
      <Link href={"single_committee/" + student?.slug?.current} key={ind}>
         <div  className="shadow-lg border-green-700 mb-3 border-b-4 w-[350px] rounded-lg">
          
             <Image src={student?.imgUrl} alt="student_image" width={300} height={200} className="w-[350px] h-[300px] object-cover rounded-t-lg" />           
             <p className="text-center py-2 text-xl font-bold">{student?.name.toUpperCase()}</p>
             <p className="text-center text-xl font-bold"> {student?.designation?.toUpperCase()}</p>
             <p className="text-center py-2 text-gray-500 text-md font-bold"> {student?.phone}</p>

          </div>
       </Link> 
     )
    })}    
 </div>
  )
}

export default Members