// import TextField from "@mui/material/TextField";

// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers";

// import { styled } from "@mui/material/styles";

// import { minWidth } from "../pages/ContactForm/ContactForm";

// const StyledCalendarHeader = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: '10px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// }));

// export default function BeautifulDesktopDatePicker({ value, onChange }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DesktopDatePicker
//         label="Date"
//         inputFormat="MM/DD/YYYY"
//         slots={{
//           textField: (params) => (
//             <TextField {...params} sx={{ minWidth: minWidth }} />
//           ),
//           openPickerIcon: () => <CalendarTodayIcon sx={{ color: 'primary.main' }} />,         
//         }}
//         sx={{ minWidth: minWidth }}
//         value={value}
//         // views={["month"]}
//         // openTo="month"
//         onChange={onChange}
//       />
//     </LocalizationProvider>
//   );
// }


import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { minWidth } from "../pages/ContactForm/ContactForm";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function BeautifulDesktopDatePicker(
  {
    value,
    onChange
  }
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        value={value}
        onChange={onChange}
        disablePast
        label="Date"
        format="MM/DD/YYYY"
        views={["day"]}
        slots={{
          textField: (params) => <TextField {...params} sx={{ minWidth: minWidth }} />,
          openPickerIcon: () => <CalendarTodayIcon sx={{ color: 'primary.main' }} />, 
        }}
        // InputProps is replaced with slotProps.textField in v7
        slotProps={{
          textField: {
            sx: { "& .MuiSvgIcon-root": { color: "primary.main" } }
          }
        }}
        // PopperProps is replaced with sx in v7
        //sx={datepickerSx}
      />
    </LocalizationProvider>
  );
}