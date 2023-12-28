import { FormControl, TextField } from "@mui/material";
import { getValidationRule } from "@utils/validationUtils";
import { useInputValidation } from "@hooks";
import React from "react";

type NormalFormControlProps = {
  label: string;
  type: string;
  name?: string;
  sm?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NormalFormControl = React.forwardRef<
  HTMLInputElement,
  NormalFormControlProps
>((props, ref) => {
  const { inputValue, error, handleInputChange } = useInputValidation(
    "",
    props.onChange || undefined,
    (value: string) => getValidationRule(value, props.name || "")
  );

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <TextField
        inputRef={ref}
        error={error}
        type={props.type}
        name={props.name}
        label={props.label}
        helperText={error && getValidationRule(inputValue, props.name || "")}
        onChange={handleInputChange}
        size={props.sm ? "small" : "medium"}
      />
    </FormControl>
  );
});

export default NormalFormControl;
