'use client'
import React from 'react'

const ContactPage = () => {

     
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
          fname:String(e.target.fname.value),
          email:String(e.target.email.value),
          text:String(e.target.text.value)
        }
       console.log(data)
       
       const response = await fetch("/api/contact",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
  
        },
        body:JSON.stringify(data),
       });
       
       if(response.ok) {
        console.log("Massege Sent Successfully");
          e.target.fname.value="";
          e.target.email.value="";
        e.target.text.value=""; 
        alert("Message Sent Successfully")
       }
       if(!response.ok){
        console.log("Error On Sending Massege" )
       }
      }
    
  return (
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.5062919597085!2d91.20951186186569!3d23.200844490572454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754837479a95485%3A0x27163893c6c7a75b!2sSreepaliya%20High%20School!5e0!3m2!1sen!2sbd!4v1695711032870!5m2!1sen!2sbd" 
    //   style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
      ></iframe>


      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-lg">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Sreepaliya High School, 2 no peria, Nangolkot, Cumilla</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 mb-1 font-medium title-font text-2xl">শ্রীফলিয়া উচচ বিদ্যালয়</h2>
      <p className="leading-relaxed mb-5 text-gray-600">যোগাযোগের জন্য পুরন করুন</p>
      <form onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <label htmlFor="fname" className="leading-7 text-sm text-gray-600">নাম</label>
        <input type="text" id="name" name="fname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">ই-মেইল</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="text" className="leading-7 text-sm text-gray-600">মেসেজ</label>
        <textarea id="message" name="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">সেন্ড মেসেজ</button>
      </form>
      {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
    </div>
  </div>
</section>
  )
}

export default ContactPage