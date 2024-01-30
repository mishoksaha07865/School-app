import Image from 'next/image'
import React from 'react'

const SingleCommittee
 = ({committee}) => {
  return (
    <div className="w-[95%]  mx-auto shadow-lg rounded shadow-blue-800 my-7">
      
       

    <section className="text-gray-600 body-font flex justify-center items-center  w-[100%]">
  <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
          src={committee[0].imageUrl}
          alt="hero"
          width={520}
          height={400}
          className="object-cover object-center rounded-lg border-blue-800 border-2"
        />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-10 flex flex-col md:items-start md:text-left items-center ">
      <div>
      <h1 className="title-font sm:text-4xl text-3xl mb-7 font-medium text-gray-900 text-center">{committee[0]?.name}</h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Email : {committee[0]?.email}</h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Phone : {committee[0]?.phone}</h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Designation : {committee[0]?.designation} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Date Of Birth : {committee[0]?.dob} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Date Of Join : {committee[0]?.join_date} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Blood Group : {committee[0]?.blood_group} </h1>
      <h1 className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900">Address : {committee[0]?.address}
       
      </h1>
      </div>
     
     
    </div>
  </div>
</section>
    </div>
  )
}

export default SingleCommittee
;