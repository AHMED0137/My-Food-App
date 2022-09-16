import React from "react";
import "./card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const FoodCard = ({ foodMenu, searchFood, allData, setCartData }) => {
  // category filter
  const categorized = allData?.filter((val) =>
    val?.category?.toLowerCase()?.includes(foodMenu?.toLowerCase())
  );
  const foodData = !categorized?.length ? allData : categorized;

  // filter using text filed
  const filtered = foodData?.filter((val) =>
    val.foodName?.toLowerCase()?.includes(searchFood?.toLowerCase())
  );
  const completeData = !filtered?.length ? foodData : filtered;
  const getorder = (value) => {
    setCartData(value);
    // console.log(value.foodName);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="main_grid">
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {completeData?.map((value, index) => {
            const img = value.image;
            return (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="food_details"
                    >
                      <span className="food_Name">{value.foodName}</span>
                      <span className="category"> {value.category}</span>
                      <span className="category_price"> {value.price}</span>
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      <span className="category_calories">
                        {" "}
                        <span className="sub_heading">Calories: </span>{" "}
                        {value.calories}
                      </span>
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                      {" "}
                      <span className="ingredients">
                        {" "}
                        <span className="sub_heading">Ingredients: </span>
                        {value.ingredients}
                      </span>
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography> */}
                    <Typography variant="body2" color="text.secondary">
                      <span className="description">
                        <span className="sub_heading">Description:</span>{" "}
                        {value.description}
                      </span>
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default FoodCard;
