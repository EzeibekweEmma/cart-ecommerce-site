import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { LuInfo } from 'react-icons/lu';

type propType = {
  checkingPasswordStrength: boolean
  passwordStrength: {
    totalCharacters: boolean
    isUpper: boolean
    isLower: boolean
    isSymbol: boolean
    isNumber: boolean
  }
}

function DisplayPasswordStrength({
  checkingPasswordStrength,
  passwordStrength: {
    totalCharacters, isUpper, isLower, isSymbol, isNumber,
  },
}: propType) {
  return (
    <div className="text-xs">
      <div
        className={`${
          checkingPasswordStrength ? 'text-green-500' : 'text-red-500'
        } flex items-center space-x-1.5 font-semibold`}
      >
        {/* Icon indicating information */}
        <LuInfo className="stroke-[3] text-base mb-0.5" />
        <span>
          {checkingPasswordStrength
            ? 'Password looks good!'
            : 'Password must contain all the info below'}
        </span>
      </div>

      {/* List displaying individual password strength requirements */}
      <ul className="space-y-1 mt-3 text-textColor/70">
        <li className="flex space-x-2 items-center">
          {totalCharacters ? (
            <IoCheckboxOutline className="text-xl mb-0.5 text-textColor" />
          ) : (
            <IoSquareOutline className="text-xl mb-0.5 text-textColor/40" />
          )}
          <span>At least 8 characters</span>
        </li>
        <li className="flex space-x-2 items-center">
          {isUpper ? (
            <IoCheckboxOutline className="text-xl mb-0.5 text-textColor" />
          ) : (
            <IoSquareOutline className="text-xl mb-0.5 text-textColor/40" />
          )}
          <span>Uppercase Letter</span>
        </li>
        <li className="flex space-x-2 items-center">
          {isLower ? (
            <IoCheckboxOutline className="text-xl mb-0.5 text-textColor" />
          ) : (
            <IoSquareOutline className="text-xl mb-0.5 text-textColor/40" />
          )}
          <span>Lowercase letter</span>
        </li>
        <li className="flex space-x-2 items-center">
          {isSymbol ? (
            <IoCheckboxOutline className="text-xl mb-0.5 text-textColor" />
          ) : (
            <IoSquareOutline className="text-xl mb-0.5 text-textColor/40" />
          )}
          <span>Special character</span>
        </li>
        <li className="flex space-x-2 items-center">
          {isNumber ? (
            <IoCheckboxOutline className="text-xl mb-0.5 text-textColor" />
          ) : (
            <IoSquareOutline className="text-xl mb-0.5 text-textColor/40" />
          )}
          <span>Number</span>
        </li>
      </ul>
    </div>
  );
}

export default DisplayPasswordStrength;
