import { IconButton } from "@mui/material";
import { CustomFormControlLabel } from "..";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useInputValidation } from "@hooks";
import { InputConstants } from "@data/constants";

type TextInputProps = {
  styles?: string;
  placeholder?: string;
  defaultValue?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  type?: string;
  labelBold?: boolean;
  strict?: boolean;
  startIcon?: React.ReactNode;
  name?: string;
  passwordValue?: string;
  inputChange?: (value: string) => void;
};

export default function TextInput(props: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const getValidationRule = (value: string) => {
    switch (props.name) {
      case InputConstants.USERNAME:
        return !/^[A-Za-z0-9]+$/.test(value)
          ? "Tên đăng nhập chỉ chứa chữ cái và số"
          : "";
      case InputConstants.PASSWORD:
        return !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? "Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái và một số"
          : "";
      case InputConstants.EMAIL:
        return !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)
          ? "Email không hợp lệ"
          : "";
      case InputConstants.CONFIRM_PASSWORD:
        return value !== props.passwordValue
          ? "Mật khẩu xác nhận không khớp"
          : "";
      default:
        return "";
    }
  };

  const { inputValue, error, handleInputChange } = useInputValidation(
    "",
    props.inputChange,
    getValidationRule
  );

  const inputClasses = `transition duration-75 w-full ${
    props.defaultValue ? "text-gray-200" : "text-gray-300"
  } text-sm border-2 border-gray-150 rounded-md outline-none  py-2 placeholder:text-gray-200 placeholder:text-sm focus:outline-none focus:box-shadow focus:inset ${
    props.styles
  } ${props.startIcon ? "pl-10" : "px-3"} ${
    error ? "border-error-400" : "focus:border-primary-600"
  }`;

  return (
    <div>
      {props.label && (
        <CustomFormControlLabel
          label={props.label}
          htmlFor={props.id}
          bold={props.labelBold}
          strict={props.strict}
        />
      )}
      <div className="relative flex items-center">
        {props.startIcon && (
          <div className="absolute left-2 text-primary-500">
            {props.startIcon}
          </div>
        )}
        <input
          type={showPassword ? "text" : props.type}
          id={props.id}
          disabled={props.disabled}
          onChange={handleInputChange}
          defaultValue={props.defaultValue}
          className={inputClasses}
          placeholder={props.placeholder}
        />
        {props.type === "password" && (
          <div className="absolute right-2 text-gray-200">
            <IconButton
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityOff fontSize="small" />
              ) : (
                <Visibility fontSize="small" />
              )}
            </IconButton>
          </div>
        )}
      </div>
      {error && inputValue && (
        <div>
          <p className="transition-all duration-75 text-error-400 text-xs p-1">
            {getValidationRule(inputValue)}
          </p>
        </div>
      )}
    </div>
  );
}
