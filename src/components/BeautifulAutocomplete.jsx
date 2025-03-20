import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { minWidth } from "../pages/ContactForm/ContactForm";

const roles = ["Software Dev", "Architect", "Designer", "Business Analyst"];

export default function BeautifulAutocomplete({ value, onInputChange }) {
  return (
    <Autocomplete
      sx={{ minWidth }}
      options={roles}
      value={value}
      onInputChange={onInputChange}
      getOptionLabel={(option) => option || ""}
      isOptionEqualToValue={(option, value) => option === value}
      renderInput={(params) => (
        <TextField
          label="Role"
          {...params}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused": 
            {
               "& > fieldset": {
                borderColor: "primary.dark",
               },
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
      slotProps={{
        listbox: {
          sx: {
            height: 100,
            color: "yellow",
            "& li:nth-child(even)": { color: "blue" },
          }
        }
      }}
      // onChange = {() => {debugger;}}
    />
  );
}
