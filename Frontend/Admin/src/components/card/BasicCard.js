import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.css";
import CircularProgress from "@mui/material/CircularProgress";

import Grid from "@mui/material/Grid";

export default function BasicCard() {
  return (
    <>
      <Grid container spacing={8} justifyContent="space-between">
        <Grid item xs={6} md={4}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent className="progress_circle">
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Breakfast Foods
              </Typography>
              <CircularProgress variant="determinate" value={25} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xxs={6} md={4}>
          {" "}
          <Card sx={{ minWidth: 300 }}>
            <CardContent className="progress_circle">
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Lunch Foods
              </Typography>
              <CircularProgress
                variant="determinate"
                value={50}
                className="circle"
                color="secondary"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          {" "}
          <Card sx={{ minWidth: 300 }}>
            <CardContent className="progress_circle">
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Dinner Foods
              </Typography>
              <CircularProgress variant="determinate" value={75} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
