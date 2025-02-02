import Image1 from "@/components/svg/Image1";
import Sidebar from "./layout/Sidebar";

export default function Home() {
  return (
    <div className="pt-2 md:pt-4 px-4 pb-4">
      <div className="w-full bg-white ">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent lg:text-4xl md:text-2xl text-xl font-bold">
            Mentogram
          </h1>

          <div className="btns p-6 hidden md:flex items-center justify-center lg:gap-9 md:gap-5 gap-3 text-[#667eea] lg:text-xl md:text-lg text-base">
            <button className="btn">Login as Mentor</button>
            <h1 className="font-bold">|</h1>
            <button className="btn">Login as Student</button>
          </div>
          <Sidebar />
        </div>

        <div className="flex flex-col md:flex-row md:justify-start justify-center">
          <Image1 className="w-full lg:max-w-[600px] md:max-w-[400px] max-w-[300px] h-auto" />
          <h1 className=" lg:text-5xl lg:pt-24 md:text-4xl md:px-2 md:pt-16 text-4xl xl:pt-40   pt-2 xl:text-6xl">
            Expert guidance, personalized learning-build your future with
            <p className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold leading-[1.2]">
              Mentogram!..
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
