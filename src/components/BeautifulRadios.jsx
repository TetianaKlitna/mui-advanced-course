import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";

import { minWidth, defaultPreference } from "../pages/ContactForm/ContactForm";

export default function BeautifulRadios({value, onChange}) {
  return (
    <FormGroup sx={{ minWidth: minWidth, marginRight: 2 }}>
      <FormLabel component="legend">
        Work Preference:
        <RadioGroup
          id="preference-type-radio"
          name="preference"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel
            control={<Radio />}
            label={defaultPreference}
            value={defaultPreference}
          />
          <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
          <FormControlLabel
            control={<Radio />}
            label="In Office"
            value="In Office"
          />
        </RadioGroup>
      </FormLabel>
    </FormGroup>
  );
}
