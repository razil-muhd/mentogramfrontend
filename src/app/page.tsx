"use client";
import Image1 from "@/components/svg/Image1";
import Sidebar from "./layout/Sidebar";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import InfiniteScroll from "@/components/card/Infinitescroll";
import CoursesSection from "@/components/card/coursesSection";

export default function Home() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className=" pt-6 ">
      <div className=" w-full max-w-[1400px] mx-auto bg-white/80 backdrop-blur-sm border rounded-full fixed right-5 left-5 z-50  ">
        <div className="flex flex-wrap items-center justify-between  ">
          <Link href={"/"}>
            <h1 className="px-14 flex justify-start bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent lg:text-2xl md:text-2xl text-xl  font-[var(--font-poppins)]">
              Mentogram
            </h1>
          </Link>

          <div className="btns p-6  hidden md:flex items-center justify-center lg:gap-9 md:gap-5 gap-3 text-[#667eea] lg:text-lg md:text-lg text-base">
            <Link href={"/studentlogin"}>
              {" "}
              <button className="btn">For Students</button>
            </Link>
            <h1 className="font-bold">|</h1>
            <button className="btn">For Mentors</button>
          </div>
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-[1300px] mx-auto pt-10">
        <div className="flex flex-col gap-8">
          <h1 className="pt-20 leading-tight text-[50px] tracking-[-1.7px]">
            Expert guidance, personalized learning - build your future with
            <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold px-2">
              Mentogram!..
            </span>
          </h1>
          <h1 className="text-[#868484]">
            A smart mentorship platform connecting learners with verified
            mentors for personalized guidance, structured learning, and career
            growth.
          </h1>
          <button className="rounded-[24px] w-fit px-10  p-2 text-[20px] tracking-[-0.6px] border bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
            Find a Mentor
          </button>
        </div>
        <Image1 className="w-full lg:max-w-[550px] md:max-w-[400px] max-w-[300px] h-auto" />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-black text-[40px] font-medium ">
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            {" "}
            We
          </span>{" "}
          Do What{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            We
          </span>{" "}
          Love &{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            We
          </span>
          ’re Just Getting Started
        </h1>
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] h-1 w-24 flex justify-center items-center"></div>
      </div>

      <div
        ref={textRef}
        id="scroll-text"
        className={`w-full px-10 pt-10 transition-opacity duration-700 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-center text-[46px] tracking-[-1.7px] text-gray-800 w-full">
          What is{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold px-2">
            Mentogram?
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-2xl text-gray-600 text-center w-full px-5 md:px-20 lg:px-40 xl:px-60">
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">
            Mentogram
          </span>{" "}
          is a mentorship platform designed to bridge the gap between industry
          experts and aspiring learners. Whether you&apos;re looking to upskill,
          seek guidance, or gain real-world insights,{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">
            Mentogram
          </span>{" "}
          connects you with experienced mentors across various domains.
          Empowering learning through interactive sessions, personalized
          guidance, and a structured roadmap to success with{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">
            Mentogram.
          </span>
        </p>
      </div>

      <InfiniteScroll />
      <CoursesSection />
    </div>
  );
}
