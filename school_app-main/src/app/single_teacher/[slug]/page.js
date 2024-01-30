
import { groq } from 'next-sanity';
import React from 'react';
import { client } from '../../../../sanity/lib/client';
import SingleTeacher from '@/app/components/Teachers/SingleTeacher';

async function getTeacherData(slug) {
    const query = groq`*[_type == "teacher" && slug.current=="${slug}"]{
     name,
     phone,
     blood_group,
     subject,
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
   
        <SingleTeacher teacher={teacherData}/>
    
      
    </section>
  
  )
}

export default TeacherPage