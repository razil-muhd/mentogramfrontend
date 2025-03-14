"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Validation schema
const Sign = z
  .object({
    firstName: z
      .string()
      .min(2, "First name is required")
      .max(20, "First name should not exceed 20 characters")
      .regex(/^[A-Z][a-zA-Z]*$/, "First name must start with a capital letter and contain only alphabets"),

    lastName: z
      .string()
      .min(2, "Last name is required")
      .max(20, "Last name should not exceed 20 characters")
      .regex(/^[A-Z][a-zA-Z]*$/, "Last name must start with a capital letter and contain only alphabets"),

    phoneNumber: z
      .string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits")
      .regex(/^\d{10}$/, "Invalid phone number"),

    email: z.string().email("Invalid email format"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type TSign = z.infer<typeof Sign>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSign>({
    resolver: zodResolver(Sign),
  });

  const router = useRouter();

  const onSubmit = async (data: TSign) => {
    console.log("Submitted Data:", data);
    toast.success("Signup successful!");
    reset();
    router.push("studentlogin");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="absolute top-6 left-6">
        <Link href={"/"}>
          <h1 className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent lg:text-4xl md:text-2xl text-xl font-bold">
            Mentogram
          </h1>
        </Link>
      </div>

      {/* Animated Signup Box */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white flex flex-col gap-3 text-center p-5 pt-3 border rounded-lg shadow-xl drop-shadow-xl"
      >
        <h1 className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent text-xl md:text-2xl font-semibold pt-5">
          Sign up
        </h1>
        <h1>Please enter your personal details.</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2 outline-none"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm text-left">{errors.firstName.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2 outline-none"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm text-left">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="number"
              placeholder="Mobile Number"
              className="border rounded-md p-2 outline-none"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm text-left">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md p-2 outline-none"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm text-left">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md p-2 outline-none"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm text-left">{errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Confirm password"
              className="border rounded-md p-2 outline-none"
              {...register("confirmPassword")} // <-- Register confirmPassword properly
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm text-left">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border rounded-md p-3">
            Sign up
          </button>
        </form>

        <h1 className="text-black">
          Already have an account?
          <Link className="text-blue-500 ml-1" href={"/studentlogin"}>
            Login
          </Link>
        </h1>
      </motion.div>
    </div>
  );
};

const Page = () => <Signup />;

export default Page;
