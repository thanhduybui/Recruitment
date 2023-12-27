import { FormControl, TextField } from "@mui/material";
import { InputConstants } from "@data/constants";
import { useInputValidation } from "@hooks";

type NormalFormControlProps = {
  label: string;
  type: string;
  name?: string;
  sm?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    props.onChange || undefined,
    getValidationRule
  );

  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <TextField
        error={error}
        type={props.type}
        name={props.name}
        label={props.label}
        helperText={error && getValidationRule(inputValue)}
        onChange={handleInputChange}
        size={props.sm ? "small" : "medium"}
      />
    </FormControl>
  );
}
