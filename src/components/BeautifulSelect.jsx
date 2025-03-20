import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

import { minWidth } from "../pages/ContactForm/ContactForm";
import { useEffect, useRef, useState } from "react";

export default function BeautifulSelect({ value, onChange, children }) {
  const selectInputComponent = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectInputComponent]);

  return (
    <FormControl sx={{ minWidth: minWidth, marginBottom: 2 }}>
      <InputLabel id="skills-label">Skills</InputLabel>
      <Select
        ref={selectInputComponent}
        labelId="skills-label"
        id="skills-multiple-checkbox"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Skills" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={{
          PaperProps: {
            sx: {
              left: `${position}px !important`,
              maxHeight: 180,
            },
          },
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
}
