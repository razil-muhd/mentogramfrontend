"use client";
import Image from "next/image";

const logos: string[] = [
  "/images/bain.svg",
  "/images/eightsleep.svg",
  "/images/general-catalyst.svg",
  "/images/google.svg",
  "/images/matterport.svg",
  "/images/meta.svg",
  "/images/microsoft.svg",
  "/images/reddit.svg",
  "/images/salesforce.svg",
  "/images/wework.svg",
];

export default function InfiniteScroll() {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden py-10">
      <hr className="border-t border-gray-300 my-10" />

      <div className="relative w-full flex items-center">
        <div className="w-[30%] z-20 bg-white pr-6">
          <h2 className="text-2xl font-bold text-gray-600">
            Connect with mentors from the world’s top companies
          </h2>
        </div>

        <div className="absolute left-0 w-[30%] h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="relative w-full overflow-hidden h-20 flex items-center">
          <div className="flex animate-scroll whitespace-nowrap gap-4">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-32 h-20 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width={100}
                  height={40}
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-10" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-34%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
