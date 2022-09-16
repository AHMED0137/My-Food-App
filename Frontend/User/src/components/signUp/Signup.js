import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeySharpIcon from "@mui/icons-material/VpnKeySharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import loginimage from "../../Assests/loggin.jpg";
// import { validate } from "email-validator";
import "./signup.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(false);
  const handleClose = () => setOpen(false);
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
    handleClose();
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
      {/* <Button
        variant="outlined"
        onClick={handleOpen}
        className="modal_open"
        color="secondary"
      >
        SignUp
      </Button> */}

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > */}
      {/* <Fade> */}
      <Box sx={style} className="model_in">
        <Typography id="modal-close_button" variant="h6" component="h2">
          <CloseSharpIcon onClick={handleClose} />
        </Typography>
        <Typography id="modal-image" variant="h6" component="h2">
          <img src={loginimage} id="modal-image" />
        </Typography>
        <Typography id="transition-modal-title" variant="h6" component="h2">
          Sign Up
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2, ml: 7 }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle
              sx={{ color: "action.active", mr: 1, mt: 5, my: 3 }}
            />
            <TextField
              id="input-with-sx"
              label="Name"
              color="secondary"
              variant="standard"
              helperText="Incorrect name"
              name="name"
              onChange={handleinput}
            />
          </Box>
        </Typography>
        <Typography id="transition-modal-description" sx={{ mt: 2, ml: 7 }}>
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
        <Typography id="transition-modal-description" sx={{ mt: 1, ml: 7 }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <VpnKeySharpIcon sx={{ color: "action.active", mr: 1, my: 3 }} />
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

        <Typography id="transition-modal-description" sx={{ mt: 5, ml: 30 }}>
          <Button
            variant="contained"
            className="login_button"
            style={{ backgroundColor: "#fd0097" }}
            endIcon={<LoginSharpIcon />}
            onClick={adddata}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
      {/* </Fade> */}
    </>
  );
};

export default SignUp;
