'use client';

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuEye, LuEyeOff, LuInfo } from 'react-icons/lu';
import Link from 'next/link';
// import axiosInstance from '@/app/util/axios';
import { useRouter, useSearchParams } from 'next/navigation';

function LogInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPassword, setIsPassword] = useState(true);

  if (searchParams.get('message')) {
    if (searchParams.get('status') === '200')
      toast.success(searchParams.get('message'));
    else toast.error(searchParams.get('message'));
    router.replace('http://localhost:3000/auth/login');
  }

  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 character(s) long'),
  });

  // Extracting the type from the Zod schema
  type formType = z.infer<typeof formSchema>;

  // Destructuring the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // submit form
  const submitData = async (data: formType) => {
    // try {
    //   const response = await axiosInstance.post('/login', data);
    //   // Display success toast
    //   toast.success(response.data.message);
    //   reset();
    //   router.push('../dashboard');
    // } catch (error: any) {
    //   // Handle errors
    //   const errorMessage = (
    //     axios.isAxiosError(error) && error?.response?.data?.message
    //   ) || 'An unexpected error occurred. Please try again later.';
    //   toast.error(errorMessage);
    // }
  };

  return (
    <form
      className="w-full space-y-5 mt-5 font-medium"
      onSubmit={handleSubmit(submitData)}
    >
      <div className="flex flex-col space-y-2">
        <label className="text-sm">Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          className="border-2 border-gray-200 outline-0 focus:bg-white
              duration-300 h-11 rounded-md p-2 bg-slate-100"
          {...register('email')}
        />
        {errors.email && (
          <div className="text-red-500 text-xs flex items-center space-x-1.5 font-semibold">
            <LuInfo className="stroke-[3] text-base mb-0.5" />
            <span>{errors.email.message}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-sm flex justify-between">
          <label>Password</label>
          <Link
            href="forgot-password"
            className="font-semibold border-b border-cPrimary text-cPrimary"
          >
            Forget password?
          </Link>
        </div>
        <div className="relative">
          <input
            type={isPassword ? 'password' : 'text'}
            placeholder="*******"
            className="border-2 border-gray-200 outline-0 focus:bg-white
              duration-300 h-11 rounded-md p-2 bg-slate-100 w-full pr-9"
            {...register('password')}
          />
          {/* Button for hide and show password */}
          <button
            type="button"
            className="absolute right-3 top-3 text-xl"
            onClick={() => setIsPassword((prev) => !prev)}
          >
            {isPassword ? <LuEye /> : <LuEyeOff />}
          </button>
        </div>

        {errors.password && (
          <div className="text-red-500 text-xs flex items-center space-x-1.5 font-semibold">
            <LuInfo className="stroke-[3] text-base mb-0.5" />
            <span>{errors.password.message}</span>
          </div>
        )}
      </div>
      <br />
      <button
        type="submit"
        className="border-cPrimary hover:text-cPrimary text-white bg-cPrimary
            hover:bg-white hover:font-semibold text-lg font-medium border-2
            duration-300 py-[9px] rounded-md w-full"
      >
        Log in
      </button>
    </form>
  );
}

export default LogInForm;
