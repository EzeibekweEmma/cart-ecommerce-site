'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { BsDashLg } from 'react-icons/bs';
import RegisterForm from './RegisterForm';
import SuccessPage from './SuccessPage';

function Register() {
  const [successDisplay, setSuccessDisplay] = useState(false);
  return (
    <section className="flex justify-center items-center font-medium">
      <div className="flex justify-center w-[30rem] sm:flex-1 duration-300 min-[1200px]:flex-[0.75]">
        <div className="my-7 mx-5">
          <div>
            {!successDisplay ? (
              <SuccessPage />
            ) : (
              <>
                <div>
                  <div>
                    <h1 className="text-[29px] md:text-[32px]">
                      Create an Account
                    </h1>
                    <p className="text-sm md:text-base text-cPrimary/80 mb-10 mt-1.5">
                      Enter your details below to create an account
                    </p>

                    <Link
                      href="http://localhost:8000/api/google"
                      className="flex justify-center items-center 
                border-2 h-12 rounded-md space-x-2 font-semibold
                hover:text-cPrimary hover:border-cPrimary"
                    >
                      <FcGoogle />
                      <span>Sign up with Google</span>
                    </Link>
                  </div>

                  <div className="text-[12.5px] md:text-sm text-grayText mt-7 flex items-center justify-center">
                    <BsDashLg />
                    <span className="mx-4">Or</span>
                    <BsDashLg />
                  </div>
                </div>

                {/* Form */}
                <RegisterForm setSuccessDisplay={setSuccessDisplay} />
              </>
            )}

            <div className="text-center mt-5 text-base">
              {!successDisplay ? (
                <Link
                  href="/"
                  className="font-semibold border-b border-cPrimary text-cPrimary"
                >
                  Resend Email
                </Link>
              ) : (
                <span>
                  Have an account?{' '}
                  <Link
                    href="./login"
                    className="font-semibold border-b border-cPrimary text-cPrimary"
                  >
                    Login now
                  </Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-bgColor2 hidden min-[900px]:flex items-center
      justify-center duration-300"
      >
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          width={300}
          height={300}
          alt="bg image"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Register;
