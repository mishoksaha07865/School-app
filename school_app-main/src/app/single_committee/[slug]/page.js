
import { groq } from 'next-sanity';
import React from 'react';
import { client } from '../../../../sanity/lib/client';
import SingleCommittee from '@/app/components/SingleCommittee';

async function getTeacherData(slug) {
    const query = groq`*[_type == "committee" && slug.current=="${slug}"]{
     name,
     phone,
     blood_group,
     designation,
     dob,
     background,
     address,
     email,
     join_date,
     "imageUrl": image.asset->url,
     }`;
    return client.fetch(query);
    } 



const TeacherPage = async (context) => {
    const slug = context.params.slug;
    
    const teacherData = await getTeacherData(slug);
  return (
    <section className="services min-h-[70vh]">
   
        <SingleCommittee committee={teacherData}/>
    
      
    </section>
  
  )
}

export default TeacherPage