'use client'
import ProfileCard from '@/_components/ProfileCard';
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {
  const [isExpertOpen, setIsExpertOpen] = useState(false);


  const handleExpertSelect = () => {
    setIsExpertOpen(false); // Close Experts dropdown
  };

 
  return (
    <div className='pt-10 h-screen'>
      {/* Navbar */}
      <div className="w-full max-w-[1400px] mx-auto bg-white/80 backdrop-blur-sm border rounded-full fixed right-5 left-5 z-50 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="px-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent lg:text-2xl md:text-2xl text-xl font-[var(--font-poppins)]">
            Mentogram
          </h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow mx-4 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-2 px-4 rounded-full border outline-none bg-white shadow-md focus:ring-2 focus:ring-[#667eea] transition-all duration-300"
          />
        </div>

        {/* Buttons */}
        <div className="btns p-6 hidden md:flex items-center justify-center lg:gap-9 md:gap-5 gap-3 text-[#667eea] lg:text-lg md:text-lg text-base">
          <Link href={"/studentlogin"}>
            <button className="btn">For Mentors</button>
          </Link>
        </div>
      </div>

      {/* Dropdowns Below Navbar */}
      <div className="p-24 flex justify-start gap-6">
        {/* Experts In Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setIsExpertOpen(!isExpertOpen);
            
            }}
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            Experts In ▼
          </button>
          {isExpertOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md">
              <ul className="py-2 text-gray-700">
                <li onClick={handleExpertSelect} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Web Development</li>
                <li onClick={handleExpertSelect} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Acca</li>
                <li onClick={handleExpertSelect} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Neet</li>
                <li onClick={handleExpertSelect} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Psc</li>
                <li onClick={handleExpertSelect} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Digital Marketing</li>
              </ul>
            </div>
          )}
            
    <div className='container mx-auto p-6'>  <ProfileCard /></div>
    </div>
        </div>

     
      </div>
  
  )
}

export default Page;
