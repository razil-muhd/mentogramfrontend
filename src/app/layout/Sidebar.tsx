"use client";
import Loginsvg from "@/components/svg/Loginsvg";
import Wrong from "@/components/svg/Wrong";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const loginLinks = [
    { name: "Login as Mentor", path: "/" },
    { name: "Login as Student", path: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
     
      <Loginsvg className="cursor-pointer" onClick={() => setOpen(true)} />

     
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 flex z-50">
        
            <div
              onClick={() => setOpen(false)}
              className="bg-transparent w-[50%] h-screen"
            ></div>

           
            <motion.div
              initial={{ x: "100%", opacity: 0 }} // Starts off-screen (right)
              animate={{ x: 0, opacity: 1 }} // Slides in
              exit={{ x: "100%", opacity: 0 }} // Slides out
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gradient-to-r from-indigo-400 to-purple-600 p-4 rounded-l-lg text-white text-base w-[50%] h-44flex flex-col mt-8 absolute end-0 shadow-lg"
            >
              {/* Close Button */}
              <Wrong
                onClick={() => setOpen(false)}
                className="ml-1 cursor-pointer mb-1"
              />

              {/* Login Links */}
              {loginLinks.map((link, index) => (
                <Link href={link.path} key={index}>
                  <div className="flex flex-col px-0 items-center pt-3hover:rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                    {link.name}
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
