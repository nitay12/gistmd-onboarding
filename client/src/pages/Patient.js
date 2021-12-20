import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Avatar,
  Tooltip,
  Zoom,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import CustomIcon from "../components/CustomIcon";
import {ageCalculator} from '../utils'
function Patient() {
  const [userData, setUserData] = useState();
  const [randomData, setRandomData] = useState();
  const params = useParams();
  const patientId = params.patientId;
  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/api/users/${patientId}`
        );
        setUserData(data);
        const res = await axios.get(
          `https://randomuser.me/api/?gender=${data.Gender.toLowerCase()}`
        );
        const [randomInputs] = res.data.results;
        console.log(randomInputs);
        setRandomData(randomInputs);
      } catch (error) {
        console.error("Couldn't get patient data", error);
      }
    }
    getUserData();
  }, [patientId]);
  const birthDate = new Date(userData?.Age).toLocaleDateString()
  const age = ageCalculator(userData?.Age)
  const Property = (props) => {
    return (
      <Zoom in={randomData?.picture}>
        <ListItem
          secondaryAction={
            props.unedditable ? null : (
              <Tooltip title={`Update ${props.label.toLowerCase()}`}>
                <IconButton edge="end" aria-label="edit">
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )
          }
        >
          {props.icon ? (
            <ListItemAvatar>
              <Avatar>
                <CustomIcon completed icon={props.icon} />
              </Avatar>
            </ListItemAvatar>
          ) : null}

          <ListItemText primary={props.label} secondary={props.data} />
        </ListItem>
      </Zoom>
    );
  };
  return (
    <Grid container>
      <Grid item sm={4} xs={2} />
      <Grid
        item
        sm={4}
        xs={8}
        sx={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{ margin: "auto", width: 100, height: 100 }}
          src={randomData?.picture.large}
          alt={"Random Picture"}
        />
        <Property unedditable data={`#${userData?.ID}`} />
        <List>
          <Property
            unedditable
            icon="user"
            label="Name"
            data={`${randomData?.name.first} ${randomData?.name.last}`}
          />
          <Property
            icon="language"
            label="Language"
            data={userData?.Language}
          />
          <Property icon="venus-mars" label="Gender" data={userData?.Gender} />
          <Property
            icon="calendar"
            label="Age"
            data={`${age} (${birthDate})`}
          />
          <Property
            icon="briefcase-medical"
            label="Procedore"
            data={userData?.Procedore}
          />
          <Property
            unedditable
            icon="mobile-alt"
            label="Cellphone"
            data={randomData?.cell}
          />
          <Property
            unedditable
            icon="phone"
            label="Phone"
            data={randomData?.phone}
          />
        </List>
      </Grid>
      <Grid item sm={4} xs={2} />
    </Grid>
  );
}

export default Patient;
