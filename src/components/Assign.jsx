import React, { useState } from "react";
import { Button, Grid} from "@mui/material";

export const Assign = () => {
  const [show, setShow] = useState("brown");

  return (
    <Grid container  spacing={3}sx={{ bgcolor: "#ffffe6", height: "400px" }}align="center">
      <Grid item xs={12}>
        <span style={{ fontSize: "100px", color: show}}>
          {show.toUpperCase()}
        </span>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="warning" fullWidth onClick={() => setShow("orange")}>
          ORANGE
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setShow("green")}
          variant="contained"
          color="warning"
          fullWidth
        >
          GREEN
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setShow("purple")}
          variant="contained"
          color="warning"
          fullWidth
        >
          PURPLE
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setShow("black")}
          variant="contained"
          color="warning"
          fullWidth
        >
          BLACK
        </Button>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => setShow("darkblue")}
        >
          DARKBLUE
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => setShow("gray")}
        >
          GRAY
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => setShow("maroon")}
        >
          MAROON
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          onClick={() => setShow("violet")}
        >
          VIOLET
        </Button>
      </Grid>
    </Grid>
  );
};
