import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";
const Search = ({ setSearchFood }) => {
  let textValue = "";
  const texthandle = (event) => {
    textValue = event.target.value;
    setSearchFood(textValue);
  };
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          className="input"
          fullWidth
          id="standard-basic"
          label="Serach Food"
          variant="standard"
          color="warning"
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
    </>
  );
};

export default Search;
