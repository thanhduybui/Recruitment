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
          value={1}
          control={<Radio size="small" />}
          label="Mặc định"
          sx={{ fontSize: "12px" }}
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label="Mới nhất"
          value={2}
          sx={{ fontSize: "12px" }}
        />
        <FormControlLabel
          control={<Radio size="small" />}
          label="Cũ nhất"
          value={3}
          sx={{ fontSize: "12spx" }}
        />
      </RadioGroup>
    </FormControl>
  );
}
