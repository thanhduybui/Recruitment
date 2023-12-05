import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type NormalFormControlProps = {
  label: string;
  type: string;
};

export default function NormalFormControl(props: NormalFormControlProps) {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel style={{ fontSize: "0.9rem" }}>{props.label}</InputLabel>
      <OutlinedInput type={props.type} label={props.label} />
    </FormControl>
  );
}
