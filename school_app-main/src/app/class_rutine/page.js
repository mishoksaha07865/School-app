import React from 'react'
import ClassRutine from '../components/ClassRutine'
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';

async function getData() {
  const query = groq`*[_type == "classrutine"]{
    "fileUrl": file.asset->url,
    shift,
    class,
    }`;
 return client.fetch(query)

 
};
const page = async () => {
  const rutineData = await getData();
  return (
    <div className=""><ClassRutine rutine={rutineData}/></div>
  )
}

export default page