import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeySharpIcon from "@mui/icons-material/VpnKeySharp";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import loginimage from "../../Assests/loggin.jpg";
import Grid from "@mui/material/Grid";
// import { validate } from "email-validator";
import "./signin.css";

const SigningIn = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //    save user data
  const handleinput = (event) =>
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  console.log(userInfo);

  const adddata = async (e) => {
    e.preventDefault();
    const doc = {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    };
    await fetch("/adduser", {
      method: "POST",
      body: JSON.stringify(doc),
      headers: { "Content-Type": "application/json" },
    });
  };
  //   handle input fields
  //   const handleinputs = (event) => {
  //     event.preventDefault();
  //     const res = validate("test@email.com"); // true
  //     if (res) {
  //       // the email is valid
  //     } else {
  //       // the email is invalid
  //     }
  //   };
  return (
    <>
      <Box sx={{ width: "100%" }} className="container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography id="modal-image" variant="h6" component="h2">
              <img src={loginimage} id="modal-image" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Sign In
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, ml: 7 }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, mt: 5, my: 3 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    color="secondary"
                    variant="standard"
                    helperText="Incorrect email"
                    name="email"
                    onChange={handleinput}
                  />
                </Box>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 1, ml: 7 }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <VpnKeySharpIcon
                    sx={{ color: "action.active", mr: 1, my: 3 }}
                  />
                  <TextField
                    id="input-with-sx"
                    color="secondary"
                    label="Password"
                    variant="standard"
                    helperText="Incorrect email"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onInput={handleinput}
                    onChange={handleChange("password")}
                  />
                  <InputAdornment
                    position="end"
                    sx={{ color: "action.active", my: 4.5 }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                </Box>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 5, ml: 30 }}
              >
                <Button
                  variant="contained"
                  className="login_button"
                  style={{ backgroundColor: "#fd0097" }}
                  endIcon={<LoginSharpIcon />}
                  // onClick={handleinputs}
                >
                  Login
                </Button>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SigningIn;
