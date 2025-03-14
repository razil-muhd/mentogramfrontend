"use client";
import Image from "next/image";

export default function CoursesSection() {
  const courses = [
    { name: "ACCA", image: "/images/acca.jpg" },
    { name: "Web Development", image: "/images/web.jpg" },
    { name: "NEET Exam Training", image: "/images/neet.jpg" },
    { name: "PSC Training", image: "/images/psc.jpg" },
    { name: "Digital Marketing", image: "/images/dm.jpg" },
  ];

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4">
    
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Mentorship Programs{" "}
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold">
            We
          </span>{" "}
          Offer
        </h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
            
              <div className="w-24 h-24 mx-auto mb-4"> 
                <Image
                  src={course.image}
                  alt={course.name}
                  width={120} 
                  height={120} 
                  className="object-contain"
                  unoptimized
                />
              </div>

           
              <h3 className="text-xl font-semibold text-gray-700">
                {course.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
