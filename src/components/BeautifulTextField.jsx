import TextField from "@mui/material/TextField";
import { minWidth } from "../pages/ContactForm/ContactForm";

export default function BeautifulTextField({value, onChange}) {

  return (
    <TextField
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={
           { 
             minWidth: minWidth, 
             marginRight: 2, 
             marginBottom: 2,
             //zIndex: "drawer",
             //"& .MuiInputBase-root": {height:80,},
             "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset":{
                borderColor: "primary.dark",
              },
             },
             "& .MuiOutlinedInput-root:hover": {
              "& > fieldset.MuiOutlinedInput-notchedOutline":{
                borderColor: "orange",
              }
             }
           }
      }
      value={value}
      onChange={onChange}
    />
  );
}
