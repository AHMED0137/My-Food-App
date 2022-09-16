import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import "./addbutton.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 7,
};
const AddButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [foodInfo, setFoodInfo] = React.useState({});

  //    save user data
  const handleinput = (event) =>
    setFoodInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  // console.log(foodInfo);

  // add api
  const adddata = async (e) => {
    e.preventDefault();
    const doc = {
      foodName: foodInfo.foodName,
      category: foodInfo.category,
      ingredients: foodInfo.ingredients,
      calories: foodInfo.calories,
      price: foodInfo.price,
      description: foodInfo.description,
      image: foodInfo.image,
    };
    await fetch("/add", {
      method: "POST",
      body: JSON.stringify(doc),
      headers: { "Content-Type": "application/json" },
    });
    handleClose();
  };
  return (
    <>
      <div>
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleOpen}
        >
          Add Food
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="model_in">
          <Typography id="modal-close_button" variant="h6" component="h2">
            <CloseSharpIcon onClick={handleClose} />
          </Typography>
          <Typography id="modal-image" variant="h6" component="h2">
            {/* <img src={} id="modal-image" /> */}
          </Typography>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add Food
          </Typography>

          <Typography
            id="transition-modal-description"
            sx={{ mt: 5, ml: 1 }}
            className="input_typography"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 1 }} />
              <TextField
                id="input-with-sx"
                label="Food Name"
                variant="standard"
                name="foodName"
                onChange={handleinput}
              />
            </Box>

            <FormControl variant="standard" sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleinput}
                label="Category"
                name="category"
              >
                <MenuItem value="Break Fast">Break Fast</MenuItem>
                <MenuItem value={"Lunch"}>Lunch</MenuItem>
                <MenuItem value={"Dinner"}>Dinner</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 5, ml: 1 }}
            className="input_typography"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CategoryIcon sx={{ color: "action.active", mr: 1, my: 1 }} />
              <TextField
                id="input-with-sx"
                label="Ingredients"
                variant="standard"
                name="ingredients"
                onChange={handleinput}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LinearScaleIcon sx={{ color: "action.active", mr: 1, my: 1 }} />
              <TextField
                id="input-with-sx"
                label="Calories"
                variant="standard"
                name="calories"
                onChange={handleinput}
              />
            </Box>
          </Typography>

          <Typography
            id="transition-modal-description"
            sx={{ mt: 5, ml: 1 }}
            className="input_typography"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CurrencyRubleIcon
                sx={{ color: "action.active", mr: 1, my: 1 }}
              />
              <TextField
                id="input-with-sx"
                label="Price"
                variant="standard"
                name="price"
                onChange={handleinput}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AddPhotoAlternateIcon
                sx={{ color: "action.active", mr: 1, my: 1 }}
              />
              <TextField
                id="input-with-sx"
                label="Image Url"
                variant="standard"
                name="image"
                onChange={handleinput}
              />
            </Box>
          </Typography>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 5, mr: 3, ml: 8 }}
          >
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              name="description"
              placeholder="Write more detail about food..."
              onChange={handleinput}
            />
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 5, ml: 50 }}>
            <Button
              variant="contained"
              className="login_button"
              style={{ backgroundColor: "#fd0097" }}
              endIcon={<LoginSharpIcon />}
              onClick={adddata}
            >
              Add Food
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddButton;
