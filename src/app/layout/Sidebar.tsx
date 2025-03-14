"use client";
import Loginsvg from "@/components/svg/Loginsvg";
import Wrong from "@/components/svg/Wrong";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const loginLinks = [
    { name: "Login as Mentor", path: "/mentorlogin" },
    { name: "Login as Student", path: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Loginsvg className="cursor-pointer" onClick={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 flex flex-col z-50">
            {/* Background overlay */}
            <div
              onClick={() => setOpen(false)}
              className="bg-transparent w-full h-full"
            ></div>

            {/* Animated Sidebar */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }} // Starts off-screen (top)
              animate={{ y: 0, opacity: 1 }} // Slides in
              exit={{ y: "-100%", opacity: 0 }} // Slides out
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gradient-to-r from-indigo-400 to-purple-600 p-4 rounded-b-lg text-white text-base w-full shadow-lg flex flex-col absolute top-0 left-0"
            >
              {/* Close Button */}
              <Wrong
                onClick={() => setOpen(false)}
                className="ml-1 cursor-pointer mb-1"
              />

              {/* Login Links */}
              {loginLinks.map((link, index) => (
                <Link href={link.path} key={index}>
                  <div className="flex flex-col items-center pt-3 hover:rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
