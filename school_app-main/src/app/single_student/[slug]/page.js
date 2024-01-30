
import { groq } from 'next-sanity';
import React from 'react';
import SingleStudent from '@/app/components/Student/SingleStudent';
import { client } from '../../../../sanity/lib/client';

async function getStudentData(slug) {
    const query = groq`*[_type == "student" && slug.current=="${slug}"]{
     name,
     class,
     roll_no,
     fathers_name,
     mothers_name,
     blood_group,
     dob,
     address,
     "imageUrl": image.asset->url,
     description,
     }`;
    return client.fetch(query);
    } 



const SingleStudentPage = async (context) => {
    const slug = context.params.slug;
    
    const studentData = await getStudentData(slug);
    
  return (
    <section className="services min-h-[70vh]">
   
        <SingleStudent student={studentData}/>
    
      
    </section>
  
  )
}

export default SingleStudentPage