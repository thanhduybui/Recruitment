import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type PassFormControllProps = {
  label: string;
};

export default function PassFormControl(props: PassFormControllProps) {
  const [showPassword, setShowPassword] = useState(false);

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
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
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
    </FormControl>
  );
}
