import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Typography from "@mui/material/Typography";
import "./card.css";

const CardData = ({ menuData }) => {
  const getorder = (value) => {
    console.log(value);
  };
  return (
    <>
      {menuData?.map((value) => {
        const image = menuData.image;
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="food_details"
              >
                <span>{value.foodName}</span>
                <span className="category"> {value.category}</span>
              </Typography>
              <Typography gutterBottom variant="p" component="div"></Typography>
              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>
            </CardContent>
            <CardActions className="order-button">
              <Button
                variant="contained"
                style={{ backgroundColor: "#ff5252" }}
                endIcon={<RestaurantMenuIcon />}
                onClick={(e) => getorder(value)}
              >
                Order Now
              </Button>{" "}
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default CardData;
