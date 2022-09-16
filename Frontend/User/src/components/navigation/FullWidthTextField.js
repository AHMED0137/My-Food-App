import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./tabpanel.css";
export default function ColorTextFields({ setsearchFood }) {
  let textValue = "";
  const texthandle = (event) => {
    textValue = event.target.value;
    setsearchFood(textValue);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        color="secondary"
        label="Search Your desire"
        focused
        className="input"
        variant="filled"
        onChange={texthandle}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
