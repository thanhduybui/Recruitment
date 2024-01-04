import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { CustomFormControlLabel } from "..";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

type RadioButtonGroupProps = {
  label?: string;
  options?: Record<string, string>;
  labelBold?: boolean;
  onChosen: (value: string) => void;
  value?: string;
  sm?: boolean;
};

export default function RadioButtonGroup(props: RadioButtonGroupProps) {
  const [option, setOption] = useState(props.value);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
    props.onChosen(event.target.value);
  };
  const optionsKeys = Object.keys(props.options ?? {});

  return (
    <FormControl>
      {!props.sm && (
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            color: "#3d3d3d",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {props.label}
        </FormLabel>
      )}
      {props.sm && (
        <CustomFormControlLabel label={props.label} bold={props.labelBold} />
      )}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={option}
        onChange={changeHandler}
      >
        {optionsKeys.map((key) => (
          <FormControlLabel
            key={key}
            value={key}
            control={
              <Radio sx={{ "& .MuiSvgIcon-root": { fontSize: "20px" } }} />
            }
            label={props.options?.[key]}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
