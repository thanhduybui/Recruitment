import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

import { InputConstants } from "@data/constants";
import { useInputValidation } from "@hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type PassFormControllProps = {
  label: string;
  name?: string;
  passwordValue?: string;
  onChange?: (value: string) => void;
};

export default function PassFormControl(props: PassFormControllProps) {
  const [showPassword, setShowPassword] = useState(false);

  const getValidationRule = (value: string) => {
    switch (props.name) {
      case InputConstants.PASSWORD:
        // Adjust the regex pattern for password strength validation
        return !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? "Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ cái và một số"
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
    props.onChange || undefined,
    getValidationRule
  );

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password"
        style={{ fontSize: "0.9rem" }}
      >
        {props.label}
      </InputLabel>
      <OutlinedInput
        error={error}
        // id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleShowPasswordClick}
              aria-label="toggle password visibility"
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
      {error && (
        <FormHelperText sx={{ color: "red" }}>
          {getValidationRule(inputValue)}
        </FormHelperText>
      )}
    </FormControl>
  );
}
