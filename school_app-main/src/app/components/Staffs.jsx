import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Staffs = ({staffs}) => {
  
  return (
    <div className="flex flex-wrap  gap-3 gap-y-3 justify-center items-center">
       {staffs.map((student,ind)=>{
        return (
            <div key={ind} className="shadow-lg border-green-700 mb-3 border-b-4">
              <Link href={"single_staff/" + student.slug.current}>
                <Image src={student.imageUrl} alt="student_image" width={200} height={200} className="w-[300px] h-[250px] object-cover rounded-t-lg" />           
                <p className="text-center py-2 text-xl font-bold">{student.name}</p>
                <p className="text-center py-2 text-xl font-bold">{student.designation}</p>
                <p className="text-center py-2 text-lg font-bold">{student.phone}</p></Link>
             </div>
        )
       })}    
    </div>
  )
}

export default Staffs;