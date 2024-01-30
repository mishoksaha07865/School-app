
import Student from '@/app/components/Student/Student';
import StudentsData from '@/app/components/Student/studentsData';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../sanity/lib/client';

async function getData() {
    const query = groq`*[_type == "student" && class=="seven"]{
      "imageUrl": image.asset->url,
      name,
      class,
      slug,
    roll_no,
      }`;
   return client.fetch(query)
  
   
  };
const Page = async () => {
    const studentData = await getData();
    return (
   <div className="lg:w-[80%] w-[97%] mx-auto">
       
       <h2 className="p-3 text-2xl flex flex-col justify-center items-center text-gray-900 w-[100%] my-4 rounded-lg"><span>৭তম শ্রেনী </span><Image src={"/icon-image.png"} alt="icon_image" width={100} height={100}/></h2>
       <div className="flex justify-center items-center">
           <Student students={studentData}/>
       </div>
   </div>)
}

export default Page