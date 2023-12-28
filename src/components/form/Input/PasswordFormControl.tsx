import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

import { getValidationRule } from "@utils/validationUtils";
import { useInputValidation } from "@hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type PassFormControllProps = {
  label: string;
  name?: string;
  passwordValue?: string;
  value?: string;
  sm?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PassFormControl(props: PassFormControllProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { inputValue, error, handleInputChange } = useInputValidation(
    "",
    props.onChange || undefined,
    (value: string) =>
      getValidationRule(value, props.name || "", props.passwordValue)
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
        size={props.sm ? "small" : "medium"}
        type={showPassword ? "text" : "password"}
        name={props.name}
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
          {getValidationRule(inputValue, props.name || "")}
        </FormHelperText>
      )}
    </FormControl>
  );
}
