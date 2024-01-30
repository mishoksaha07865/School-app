import Image from 'next/image'
import React from 'react'

const SingleStudent = ({student}) => {
  return (
    <div className="w-[95%]  mx-auto shadow-lg rounded shadow-blue-800 my-7">
      
       

    <section className="text-gray-600 body-font flex justify-center items-center  w-[100%]">
  <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
          src={student[0].imageUrl}
          alt="hero"
          width={520}
          height={400}
          className="object-cover object-center rounded-lg border-blue-800 border-2"
        />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-10 flex flex-col md:items-start md:text-left items-center ">
      <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-7 font-medium text-gray-900 text-center">{student[0]?.name}</h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Class : {student[0]?.class}</h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Roll : {student[0]?.roll_no} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Fathers Name : {student[0]?.fathers_name.toUpperCase()} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Mothers Name : {student[0]?.mothers_name.toUpperCase()} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Date Of Birth : {student[0]?.dob} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Blood Group : {student[0]?.blood_group} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Address : {student[0]?.address}
       
      </h1>
      </div>
     
     
    </div>
  </div>
</section>
    </div>
  )
}

export default SingleStudent