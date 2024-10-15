import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import 'react-toastify/dist/ReactToastify.css';
import { LuEye, LuEyeOff, LuInfo } from 'react-icons/lu';
import DisplayPasswordStrength from '@/components/DisplayPasswordStrength';

type setSuccessDisplayType = {
  setSuccessDisplay: React.Dispatch<React.SetStateAction<boolean>>;
};

function RegisterForm({ setSuccessDisplay }: setSuccessDisplayType) {
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState({
    // passwordRequirementsStrength
    totalCharacters: false,
    isUpper: false,
    isLower: false,
    isSymbol: false,
    isNumber: false,
  });

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setPassword(value);

    setPasswordStrength((prev) => ({
      ...prev,
      totalCharacters: value.length > 7,
      isUpper: /[A-Z]/.test(value),
      isLower: /[a-z]/.test(value),
      isNumber: /[0-9]/.test(value),
      isSymbol: /[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/.test(value),
    }));
  };

  const checkingPasswordStrength =
    passwordStrength.totalCharacters &&
    passwordStrength.isNumber &&
    passwordStrength.isSymbol &&
    passwordStrength.isLower &&
    passwordStrength.isUpper;

  const formSchema = z.object({
    email: z.string().email(),
    fullName: z
      .string()
      .min(3, 'Name must be at least 3 character(s) long')
      .max(50, 'Name should not exceed 50 character(s)'),
  });

  // Extracting the type from the Zod schema
  type formType = z.infer<typeof formSchema>;

  // Destructuring the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  const submitData = async (data: formType) => {
    const newData = { ...data, password };
    // submitData
  };

  return (
    <form
      className="w-full space-y-5 mt-5 font-medium"
      onSubmit={handleSubmit(submitData)}
    >
      <div className="flex flex-col space-y-2">
        <label className="text-sm">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="border-2 border-gray-200 outline-0 focus:bg-white
              duration-300 h-11 rounded-md p-2 bg-slate-100"
          {...register('fullName')}
        />
        {errors.fullName && (
          <div className="text-red-500 text-xs flex items-center space-x-1.5 font-semibold">
            <LuInfo className="stroke-[3] text-base mb-0.5" />
            <span>{errors.fullName.message}</span>
          </div>
        )}
      </div>

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
        <label className="text-sm">Password</label>
        <div className="relative">
          <input
            type={isPassword ? 'password' : 'text'}
            placeholder="*******"
            className="border-2 border-gray-200 outline-0 focus:bg-white
              duration-300 h-11 rounded-md p-2 bg-slate-100 w-full pr-9"
            onChange={handleChange}
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

        {password.length > 0 && (
          <DisplayPasswordStrength
            checkingPasswordStrength={checkingPasswordStrength}
            passwordStrength={passwordStrength}
          />
        )}
      </div>
      <br />
      <button
        type="submit"
        disabled={!checkingPasswordStrength}
        className={`${
          checkingPasswordStrength
            ? 'border-cPrimary hover:text-cPrimary text-white bg-cPrimary hover:bg-white hover:font-semibold'
            : 'bg-cPrimary/50 text-cPrimary border-cPrimary/50 cursor-not-allowed'
        }
              text-lg font-medium border-2 duration-300 py-[9px] rounded-md w-full`}
      >
        Create an account
      </button>
    </form>
  );
}

export default RegisterForm;
