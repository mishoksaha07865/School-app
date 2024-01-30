import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Student = ({students}) => {
  
  return (
    <div className="flex gap-3 flex-wrap justify-center items-center min-h-[60vh]">
       {students.map((student,ind)=>{
        return (
          <Link href={`/single_student/` + student.slug.current} key={ind}>
             <div className="shadow-black flex flex-wrap shadow-lg rounded-lg ">
            <div className="h-full flex flex-col items-center text-center w-[300px]">
              {/* Replace the <img> tag with Image component */}
              <Image
                src={student.imageUrl}
                alt="team"
                width={400} // Set the desired width
                height={300} // Set the desired height
                className="flex-shrink-0 rounded-t-lg w-[300px] h-[250px]  object-cover object-center mb-4"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">{student.name}</h2>
                <h3 className="text-gray-500 mb-3">{student.class}</h3>
                <p className="mb-4">Roll No : {student.roll_no}</p>
               
              </div>
            </div>
          </div>
             </Link>
        )
       })}    
    </div>
  )
}

export default Student