import React from "react";
import { styled, Icon } from "@mui/material";

const StyledIcon = styled("div")(({ theme, active, completed }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  ...(active && {
    color: "#eb3434",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    border: "3px solid",
  }),
  ...(completed && {
    backgroundColor: "#eb3434",
  }),
}));

const CustomIcon = ({icon, completed}) => (
  <StyledIcon completed={completed} >
    {/* <Icon>{icon}</Icon> */}
    <Icon baseClassName="fas" className={`fa-${icon}`} />
  </StyledIcon>
);

export default CustomIcon;
