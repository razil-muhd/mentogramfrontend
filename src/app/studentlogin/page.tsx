"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import CloseEye from "@/components/svg/CloseEye";
import Openeye from "@/components/svg/Openeye";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(10, "Maximum 10 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).*$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

type Tlogin = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Tlogin>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onsubmit = async (data: Tlogin) => {
    console.log("data:::", data);
    toast.success("Login successful!");
    router.push("/mentorslist")
    reset();
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <h1 className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent text-xl md:text-3xl font-bold">
            Mentogram
          </h1>
        </Link>
      </div>

      {/* Animated Login Box */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white flex flex-col gap-4 text-center p-6 w-full max-w-md border rounded-lg shadow-lg"
      >
        <h1 className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent text-2xl font-semibold">
          Login to Your Account
        </h1>
        <p className="text-gray-600">Please enter your details</p>

        {/* Form */}
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="text-left">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="border rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-[#667eea]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative w-full text-left">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Password"
              className="border rounded-md p-3 w-full outline-none focus:ring-2 focus:ring-[#667eea]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 cursor-pointer"
            >
              {showPassword ? <Openeye /> : <CloseEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium py-3 rounded-md hover:opacity-90 transition-all"
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-gray-600">
          Don&apos;t have an account?
          <Link
            href="/studentsignup"
            className="text-[#667eea] font-medium ml-1 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
