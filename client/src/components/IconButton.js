import React from "react";
import {Button, Typography, Grid } from "@mui/material";
import CustomIcon from "./CustomIcon";

function IconButton({ icon, active, onClick, completed, className, title }) {
  return (
    <Grid container direction="column">
      <Button onClick={onClick}>
        <CustomIcon icon={icon} completed={active} />
      </Button>
      <Typography variant="text">{title}</Typography>
    </Grid>
  );
}

export default IconButton;
