import React from "react";
import "./cart.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const CartDrawer = ({ cartData }) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>Cart</ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Card sx={{ minWidth: 200 }} style={{ margin: "5%" }}>
        <CardContent style={{ display: "flex", alignContent: "space-between" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {cartData?.foodName}
              {/* {cartData.foodName} */}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
              {cartData?.category}{" "}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {cartData?.price}

              <br />
            </Typography>
          </CardContent>
          <CardContent style={{ marginLeft: "5%" }}>
            <CardMedia
              component="img"
              image={cartData?.image}
              className="cart_image"
            />
          </CardContent>
        </CardContent>
        {/* card button */}
        <CardActions>
          <Button size="small">Confrom Order</Button>
        </CardActions>
      </Card>
    </Box>
  );
  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{
              rigth: "0",
              position: "fixed",
              padding: "6%",
            }}
            className="cart_button"
          >
            <ShoppingCartIcon className="cart_button_icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default CartDrawer;
