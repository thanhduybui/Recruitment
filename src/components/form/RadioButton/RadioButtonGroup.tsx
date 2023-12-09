import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { Gender } from "@data/constants";

type RadioButtonGroupProps = {
  label?: string;
  values?: string[];
};

export default function RadioButtonGroup(props: RadioButtonGroupProps) {
  const [option, setOption] = useState(Gender.MALE);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ color: "#3d3d3d", fontWeight: 600, fontSize: "1rem" }}
      >
        {props.label}
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={option}
        onChange={changeHandler}
      >
        {props.values?.map((value) => (
          <FormControlLabel
            value={value}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: "20px",
                  },
                }}
              />
            }
            label={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
