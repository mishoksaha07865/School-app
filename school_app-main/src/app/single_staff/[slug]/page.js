
import { groq } from 'next-sanity';
import React from 'react';
import { client } from '../../../../sanity/lib/client';
import SingleStaff from '@/app/components/Teachers/SingleStaff';

async function getStaffData(slug) {
    const query = groq`*[_type == "staffs" && slug.current=="${slug}"]{
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
    
    const staffData = await getStaffData(slug);
  return (
    <section className="services min-h-[70vh]">
   
        <SingleStaff staff={staffData}/>
    
      
    </section>
  
  )
}

export default TeacherPage