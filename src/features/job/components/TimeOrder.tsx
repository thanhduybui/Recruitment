import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function TimeOrder() {
  return (
    <FormControl sx={{ marginBottom: "1.2rem" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={1}
      >
        <FormControlLabel
          control={<Radio size="small" />}
          label="Mới nhất"
          value={1}
          sx={{ fontSize: "12px" }}
        />
      </RadioGroup>
    </FormControl>
  );
}
