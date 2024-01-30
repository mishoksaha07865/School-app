


"use client"

import Image from 'next/image';
import Link from 'next/link';
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
import {FaHome} from "react-icons/fa"
import React, {  useState } from 'react'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../SolaimanLipiRegular.ttf',
  weight: '100',
  style:'normal',
  display:'swap',
})
 

const Navbar = () => {
    const [resp,setResp] = useState(false);
    const [navbar, setNavbar] = useState(false)
      //navbar scroll changeBackground function
  const changeBackground = () => {
    
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

//   useEffect(() => {
//     changeBackground()
//     // adding the event when scroll change background
//     window.addEventListener("scroll", changeBackground)
//   })

  return (
   
        
<nav className={`${myFont.className} bg-gray-900 border-red-800 border-b-4 text-lg shadow-lg dark:border-gray-700 shadow-gray-400 sticky top-0 z-50 px-10 w-[100%] px-auto`}>
  <div className=" flex flex-wrap items-center justify-between  p-4">
    
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:text-white transition duration-500 rounded-lg lg:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        {!resp?  <GiHamburgerMenu className="focus:border-none active:border-none w-[250px] h-[250px] text-white " onClick={()=>setResp(!resp)} /> :<RxCross2 onClick={()=>setResp(!resp)} className="focus:border-none active:border-none w-[250px] h-[250px] text-white " />}
       
    </button>
    <div className={`lg:block w-full lg:w-auto ${resp ? 'block' : 'hidden'}`} id="navbar-multi-level transition-all duration-400 delay-300">
      <ul className= "flex flex-col  p-4 lg:p-0 mt-4 border  border-gray-100 text-center  rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 md:border-0  transition-all duration-400 delay-300">
      <Link href="/" onClick={()=>setResp(!resp)}>
        <li className="p-2 lg:p-0 flex justify-center gap-2 hover:bg-gray-100 hover:rounded text-white hover:text-gray-900 md:hover:text-white  md:hover:text-xl md:hover:bg-transparent duration-500 text-xl" >
        <FaHome className="text-2xl" />
        প্রছদ
        </li></Link>
      
        <li className="group w-full">
  <button 
    className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 lg:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-lg duration-500" 
  >
    {/* <span className="pr-1 font-semibold">About Us</span> */}
    
        <li className="p-2 lg:p-0  hover:rounded text-white md:hover:text-lg md:hover:bg-transparent duration-500 relative  md:hover:text-white lg:w-[120px] text-xl" >
       বিদ্যালয় সম্পর্কে
        </li> 
    <span>
      <svg
        className="text-white fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    className="text-start bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out z-50 origin-top lg:w-fit w-[80%]"
  >
    
    <Link href="/history" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        প্রতিষ্ঠানের ইতিহাস
        </li></Link> 
     <Link href="/principle" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        প্রধান শিক্ষকের বানী
        </li></Link> 
     <Link href="/president" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        সভাপতির বানী
        </li></Link> 
     <Link href="/committee" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        গভার্নিং বডি
        </li></Link> 
     <Link href="/staffs" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        কর্মচারীবৃন্দ
        </li></Link> 
     <Link href="/introduction" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        বিদ্যালয় পরিচিতি
        </li></Link> 
   
       
   </ul>
        </li>
        
        <Link href="/teachers" onClick={()=>setResp(!resp)}>
        <li className="p-2 lg:p-0 hover:bg-gray-100 hover:rounded text-white hover:text-gray-900 md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 md:hover:text-white " >
        শিক্ষকমন্ডলী
        </li></Link>
        

        <li className="group w-full">
  <button 
    className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 lg:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-xl duration-500" 
  >
    {/* <span className="pr-1 font-semibold">About Us</span> */}
    
        <li className="p-2 lg:p-0  hover:rounded text-white md:hover:text-xl md:hover:bg-transparent  text-lg duration-500 relative  md:hover:text-white " >
        শিক্ষার্থী
        </li> 
        
    <span>
      <svg
        className="text-white fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out origin-top lg:w-fit w-[80%] z-50"
  >
     <Link href="/students/6th_Class" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        ৬ষ্ঠ শ্রেণী
        </li></Link> 
     <Link href="/students/7th_Class" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        ৭ম শ্রেণি
        </li></Link> 
     <Link href="/students/8th_Class" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" onClick={()=>setResp(!resp)} >
        ৮ম শ্রেণি
        </li></Link> 
        <Link href="/students/9th_Class" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500 px-2" >
        ৯ম শ্রেণি
        </li></Link> 
        <Link href="/students/10th_Class" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500 px-2" >
        ১০ম শ্রেণি
        </li></Link> 
   </ul>
        </li>
       
       
        <li className="group w-full">
  <button 
    className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 lg:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-lg duration-500" 
  >
    {/* <span className="pr-1 font-semibold">About Us</span> */}
    
        <li className="p-2 lg:p-0  hover:rounded text-white md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 relative  md:hover:text-white " >
       ভর্তি
        </li> 
    <span>
      <svg
        className="text-white fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out origin-top lg:w-fit w-[80%] z-50"
  >
     <Link href="/admit_info" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        ভর্তি বিজ্ঞপ্তি
        </li></Link> 
     <Link href="/admit_form" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500" >
        ভর্তি ফরম
        </li></Link> 
   
       
   </ul>
        </li>
        <Link href="/class_rutine" onClick={()=>setResp(!resp)}>
        <li className="p-2 lg:p-0 hover:bg-gray-100 hover:rounded text-white hover:text-gray-900 md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 md:hover:text-white lg:w-[100px]" >
        ক্লাস রুটিন
        </li></Link>
        
        
        <Link href="/photo_gallery" onClick={()=>setResp(!resp)}>
        <li className="p-2 lg:p-0 hover:bg-gray-100 hover:rounded text-white hover:text-gray-900 md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 md:hover:text-white lg:w-[100px]" >
        ফটো গ্যালারী
        </li></Link>
        <Link href="/contact" onClick={()=>setResp(!resp)}>
        <li className="p-2 lg:p-0 hover:bg-gray-100 hover:rounded text-white hover:text-gray-900 md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 md:hover:text-white" >
        যোগাযোগ
        </li></Link>
        
        <li className="group w-full">
  <button 
    className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 lg:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-lg duration-500" 
  >
    {/* <span className="pr-1 font-semibold">About Us</span> */}
    
        <li className="p-2 lg:p-0  hover:rounded text-white md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 relative  md:hover:text-white lg:w-[180px]" >
        প্রাক্তন ছাত্র-ছাত্রী সংসদ 
        </li> 
    <span>
      <svg
        className="text-white fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    className="text-start bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out origin-top lg:w-fit w-[80%] z-50"
  >
     <Link href="/mujib_cornar" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        প্রতিষ্ঠাতা আহবায়ক পরিষদ
        </li></Link> 
     <Link href="/result" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        উপদেষ্টা পরিষদ
        </li></Link> 
     
        
        <Link href="/notice" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500 px-2" >
        কার্যনির্বাহী পরিষদ 
        </li></Link> 
        
   </ul>
        </li>
        <li className="group w-full">
  <button 
    className="w-full text-center items-center justify-center outline-none focus:outline-none  px-3 py-1 rounded-sm flex p-2 lg:p-0 hover:bg-gray-900 hover:rounded hover:text-white md:hover:text-black md:hover:bg-transparent text-lg duration-500" 
  >
    {/* <span className="pr-1 font-semibold">About Us</span> */}
    
        <li className="p-2 lg:p-0  hover:rounded text-white md:hover:text-xl md:hover:bg-transparent  text-xl duration-500 relative  md:hover:text-white " >
        অন্যান্য
        </li> 
    <span>
      <svg
        className="text-white fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    className="text-start bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-500 delay-300 ease-in-out origin-top lg:w-fit w-[80%] z-50"
  >
     <Link href="/mujib_cornar" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        মুজিব কর্নার
        </li></Link> 
     <Link href="/result" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white  text-lg duration-500 px-2" >
        ফলাফল
        </li></Link> 
     
        
        <Link href="/notice" onClick={()=>setResp(!resp)}>
        <li className="p-2 md:p-2 hover:bg-gray-900 hover:rounded hover:text-white text-lg duration-500 px-2" >
        নোটিশ
        </li></Link> 
        
   </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    
  )
}

export default Navbar