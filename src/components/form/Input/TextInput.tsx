import { IconButton } from "@mui/material";
import { FormControlLabel } from "..";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

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
};

export default function TextInput(props: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      {props.label && (
        <FormControlLabel
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
          defaultValue={props.defaultValue}
          className={`transition duration-75 w-full ${
            props.defaultValue ? "text-gray-200" : "text-gray-300"
          } text-sm border-2 border-gray-150 
    rounded-md outline-none focus:border-primary-600 py-2 placeholder:text-gray-200 placeholder:text-sm 
    focus:outline-none focus:box-shadow focus:inset ${props.styles} ${
            props.startIcon ? "pl-10" : "px-3"
          }`}
          placeholder={props.placeholder}
        />
        {props.type === "password" && (
          <div className="absolute right-2 text-gray-200">
            <IconButton
              className="cursor-pointer"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {!showPassword ? (
                <Visibility fontSize="small" />
              ) : (
                <VisibilityOff fontSize="small" />
              )}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}
