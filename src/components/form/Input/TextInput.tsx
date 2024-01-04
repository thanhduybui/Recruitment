import { IconButton } from "@mui/material";
import { CustomFormControlLabel } from "..";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useInputValidation } from "@hooks";
import { getValidationRule } from "@utils/validationUtils";

type TextInputProps = {
  styles?: string;
  placeholder?: string;
  defaultValue?: string;
  id?: string;
  disabled?: boolean;
  label?: string;
  type?: string;
  labelBold?: boolean;
  required?: boolean;
  startIcon?: React.ReactNode;
  name: string;
  passwordValue?: string;
  inputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput(props: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { inputValue, error, handleInputChange } = useInputValidation(
    props.defaultValue || "",
    props.inputChange,
    (value: string) =>
      getValidationRule(value, props.name || "", props.passwordValue)
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
          strict={props.required}
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
          value={inputValue}
          disabled={props.disabled}
          onChange={handleInputChange}
          className={inputClasses}
          name={props.name}
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
      {error && (
        <div>
          <p className="transition-all duration-75 text-error-400 text-xs p-1">
            {getValidationRule(
              inputValue,
              props.name || "",
              props.passwordValue
            )}
          </p>
        </div>
      )}
    </div>
  );
}
