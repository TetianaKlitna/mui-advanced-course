import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

import { useTheme } from "@mui/material/styles";

import { StyledFormGroup } from "../../components/StyledFormGroup.jsx";

import BeautifulTextField from "../../components/BeautifulTextField";
import BeautifulAutocomplete from "../../components/BeautifulAutocomplete";
import BeautifulSelect from "../../components/BeautifulSelect";
import BeautifulDesktopDatePicker from "../../components/BeautifulDesktopDatePicker";
import BeautifulRadios from "../../components/BeautifulRadios";

import { contacts } from "../../data/ContactData.js";

import { useState } from "react";
import dayjs from "dayjs";

export const minWidth = 300;
export const defaultPreference = "Work From Home";

const skills = ["React", "Angular", "Python", "NodeJS", "Mashining Learning"];

const paperInputsStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
    "&:hover": {
      "& > fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

export default function ContactForm() {
  const theme = useTheme();

  const getDefFormValues = () => {
    const newDate = new Date();
    const formattedDate = `${
      newDate.getMonth() + 1
    }/${newDate.getDate()}/${newDate.getFullYear()}`;
    return {
      id: contacts.length + 1,
      name: "",
      role: "",
      skills: [],
      startDate: formattedDate,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState(getDefFormValues());
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAutoCompleteChange = (event, value) => {
    setFormValues({ ...formValues, role: value || "" });
  };

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value,
    });
  };

  const handleDatePickerChange = (value) => {
    const startDate = value ? value.format("MM/DD/YYYY") : "";
    console.log(startDate);
    setFormValues({ ...formValues, startDate: startDate });
  };

  const handleRadioGroupChange = (event, value) => {
    const { name } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitClick = () => {
    contacts.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const handleClearClick = () => {
    clearValues();
  };

  const clearValues = () => {
    setFormValues(getDefFormValues());
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  const [hasError, setHasError] = useState(false);

  const handleValidation = () => {
    // Validation logic (for demonstration purposes, always sets error)
    setHasError(true);
  };

  return (
    <>
      <Paper
        sx={{
          ...paperInputsStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.1)",
          },
          backgroundColor: "grid.dark",
          //"& button.MuiButton-text": { backgroundColor: "primary.light" }
        }}
      >
        <FormControl>
          <StyledFormGroup row>
            <FormControl>
              <TextField
                id="my-input"
                label="Username"
                sx={{ minWidth: minWidth }}
              />
              <FormHelperText>Choose a unique username</FormHelperText>
            </FormControl>

            <FormControl error={hasError}>
              <TextField
                id="my-input"
                onBlur={handleValidation}
                label="Email"
                sx={{ minWidth: minWidth }}
              />
              {hasError && (
                <FormHelperText>Error: Invalid email address</FormHelperText>
              )}
            </FormControl>
          </StyledFormGroup>

          <StyledFormGroup row>
            <BeautifulTextField
              value={formValues.name}
              onChange={handleTextFieldChange}
            />
            <BeautifulAutocomplete
              value={formValues.role || ""}
              onInputChange={handleAutoCompleteChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row>
            <BeautifulSelect
              value={formValues.skills || ""}
              onChange={handleSelectChange}
            >
              {skills.map((skillName) => (
                <MenuItem key={skillName} value={skillName}>
                  <Checkbox checked={formValues.skills?.includes(skillName)} />
                  <ListItemText primary={skillName} />
                </MenuItem>
              ))}
            </BeautifulSelect>
            <BeautifulDesktopDatePicker
              value={dayjs(formValues.startDate)}
              onChange={handleDatePickerChange}
            />
          </StyledFormGroup>
          <StyledFormGroup row sx={{ backgroundColor: "orange" }}>
            <BeautifulRadios
              value={formValues.preference}
              onChange={handleRadioGroupChange}
            />
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              sx={{ minWidth: minWidth }}
            >
              <Button
                variant="contained"
                sx={{ height: 56, width: 100 }}
                onClick={handleSubmitClick}
              >
                Submit
              </Button>
              <Button
                variant="beautiful"
                sx={{ height: 56, width: 100 }}
                onClick={handleClearClick}
              >
                Clear
              </Button>
            </Stack>
          </StyledFormGroup>
        </FormControl>
      </Paper>
      <Dialog open={alertOpen}>
        <Alert
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleAlertClick}
            >
              <Close fontSize="small" />
            </IconButton>
          }
        >
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}
