import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import LogInForm from './LoginForm';
import { BsDashLg } from 'react-icons/bs';

function Login() {
  return (
    <section className="flex justify-center items-center font-medium">
      <div className="flex justify-center w-[30rem] sm:flex-1 duration-300 min-[1200px]:flex-[0.75]">
        <div className="my-7 mx-5">
          <div>
            <div>
              <h1 className="text-[29px] md:text-[32px]">Welcome back!</h1>
              <p className="text-sm md:text-base text-cPrimary/80 mb-10 mt-1.5">
                Log in to your account
              </p>

              <Link
                href="http://localhost:8000/api/google"
                className="flex justify-center items-center
                border-2 h-12 rounded-md space-x-2 font-semibold
                hover:text-cPrimary hover:border-cPrimary"
              >
                <FcGoogle />
                <span>login with Google</span>
              </Link>

              <div className="text-[12.5px] md:text-sm text-grayText mt-7 flex items-center justify-center">
                <BsDashLg />
                <span className="mx-4">Or</span>
                <BsDashLg />
              </div>
            </div>

            {/* Form */}
            <LogInForm />

            <div className="text-center mt-5 text-base">
              <span>
                Don’t have an account?{' '}
                <Link
                  href="./register"
                  className="font-semibold border-b border-cPrimary text-cPrimary"
                >
                  Register now
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 hidden min-[900px]:flex items-center
      justify-center duration-300"
      >
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          width={300}
          height={300}
          alt="bg image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Login;
