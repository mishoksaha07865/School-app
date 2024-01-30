import Image from 'next/image'
import HeroSlider from './components/HeroSlider'
import HeroSlider1 from './components/HeroSlider'
import Content from './components/Content/Content'
import Sidebar from './components/Sidebar/Sidebar'
import TeachersMain from './components/Teachers/TeachersMain'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'
import MarqueeComp from './components/MarqueeComp';
import {HiOutlineSpeakerphone} from "react-icons/hi"
import Marquee from 'react-fast-marquee'

async function getData() {
  const query = groq`*[_type == "herosection"]{
    "imageUrl": image.asset->url,
    title,
    description,
    }`;
 return client.fetch(query)

 
};
async function getTeacher() {
  const query = groq`*[_type == "teacher"]{
    "imageUrl": image.asset->url,
     name,
     phone,
     subject,
    description,
    }`;
 return client.fetch(query)

 
};
async function getAnnouncement() {
  const query = groq`*[_type == "announcement"]{
    text,
    }`;
 return client.fetch(query)

 
};
async function getQouteData() {
  const query = groq`*[_type == "Quotes"][0]{
    principal {
      name,
      description,
      title,
      "imgUrl":image.asset->url,
    },
    president {
      name,
      description,
      title,
      "imgUrl":image.asset->url,
    }
    }`;
 return client.fetch(query)

 
};
export const revalidate = 60;
export default async function Home() {
  const [heroData, teacher, {principal,president},announcement] = await Promise.all([getData(), getTeacher(), getQouteData(),getAnnouncement()]);
  const teacherData = teacher.slice(0,4);
  const ArrayQoute = [principal,president]
  return (
    <>
    <main className="">
    <div className="lg:w-[80%] w-[98%] mx-auto"> <HeroSlider1 data={heroData}/></div>
     
     <div className="flex items-center my-3 border-black border-2 lg:w-[80%] w-[96%] mx-auto"> <span className="w-[200px] text-center bg-gray-800 p-2 text-white flex items-center gap-x-4 justify-center"><span className="text-2xl" ><HiOutlineSpeakerphone /></span>জরুরী ঘোষনা</span><MarqueeComp text={announcement[0].text} speed={60} />
    </div>
      <div className="flex flex-wrap w-[95%] mb-2  xl:w-[80%] mx-auto min-h-[50vh] p-3 border-2 border-gray-400 ">
        {ArrayQoute && <div className="md:w-[70%] w-[100%]"><Content qoute={ArrayQoute}/></div>}
        <div className="md:w-[30%] w-[100%]"><Sidebar/></div>
        

      </div>
      <div className="justify-center items-center flex flex-wrap w-[95%] mb-2  xl:w-[80%] min-h-[50vh] mx-auto p-3 border-2 border-gray-400">
      <TeachersMain teacher={teacherData} /></div>
    
      
    
    </main>
    
    </>
  )
}
