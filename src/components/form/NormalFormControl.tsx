import { FormControl, TextField } from "@mui/material";
import { InputConstants } from "@constants";
import { useInputValidation } from "@hooks";

type NormalFormControlProps = {
  label: string;
  type: string;
  name?: string;
};

export default function NormalFormControl(props: NormalFormControlProps) {
  const getValidationRule = (value: string) => {
    switch (props.name) {
      case InputConstants.USERNAME:
        return !/^[A-Za-z0-9]+$/.test(value)
          ? "Tên đăng nhập chỉ chứa chữ cái và số"
          : "";
      case InputConstants.EMAIL:
        return !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)
          ? "Email không hợp lệ"
          : "";
      default:
        return "";
    }
  };

  const { inputValue, error, handleInputChange } = useInputValidation(
    "",
    undefined,
    getValidationRule
  );

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <TextField
        error={error}
        type={props.type}
        label={props.label}
        helperText={error && getValidationRule(inputValue)}
        onChange={handleInputChange}
      />
    </FormControl>
  );
}
