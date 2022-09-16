import React from "react";
import { Button } from "@mui/material";
import SigningUp from "../signUp/signingUp";
import SigningIn from "../signIn/SigningIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./tabpanel.css";
const Navbutton = () => {
  return (
    <>
      <Router>
        <div className="button_router">
          <Button variant="text">
            <Link to="/signIn/SigningIn.js" className="button_router_link">
              Sign In
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to="/" className="button_router_link">
              Sign Up
            </Link>
          </Button>
        </div>

        <Routes>
          <Route path="/" element={<SigningUp />}></Route>
          <Route path="/signUp/signingUp.js" element={<SigningUp />}></Route>
          <Route path="/signIn/SigningIn.js" element={<SigningIn />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Navbutton;
