import React from "react";
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
import "./signup.css";
import SigningIn from "../signIn/SigningIn";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { color } from "@mui/system";
const SignUp = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(userInfo));
    adddata(e);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };

  const adddata = async (e) => {
    console.log("in add fun");
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
                Sign Up
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, ml: 7 }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, mt: 5, my: 1 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Name"
                    color="secondary"
                    variant="standard"
                    helperText={formErrors.name}
                    name="name"
                    onChange={handleinput}
                  />
                </Box>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 3, ml: 7 }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, mt: 5, my: 1 }}
                  />
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    color="secondary"
                    variant="standard"
                    helperText={formErrors.email}
                    name="email"
                    onChange={handleinput}
                  />
                </Box>
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 3, ml: 7 }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <VpnKeySharpIcon
                    sx={{ color: "action.active", mr: 1, my: 1 }}
                  />
                  <TextField
                    id="input-with-sx"
                    color="secondary"
                    label="Password"
                    variant="standard"
                    helperText={formErrors.password}
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onInput={handleinput}
                    onChange={handleChange("password")}
                  />
                  <InputAdornment
                    position="end"
                    sx={{ color: "action.active", my: 2 }}
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
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Typography>
              <Typography sx={{ mt: 2, ml: 20 }}>
                {/* <Router>
                  <span className="transition-modal-description">
                    Already have an account?{" "}
                    <Link to="/SigningIn.js">Login</Link>
                  </span>
                  <Routes>
                    <Route path="/SigningIn.js" element={<SigningIn />}></Route>
                  </Routes>
                </Router> */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;
