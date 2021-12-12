import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Grid,
  CircularProgress,
  Icon,
  Typography,
  Box,
} from "@mui/material";
import CustomIcon from "../components/CustomIcon";
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
  const Property = (props) => {
    return (
      <Grid container spacing={1} xs={8} sm={4}>
        <Grid item>
          {props.icon ? <CustomIcon completed icon={props.icon} /> : null}
        </Grid>
        <Grid item>
          <strong>
            {props.label} {props.data}
          </strong>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container >
      <Grid item xs={4} />
      <Grid item xs={4} sx={{alignItems: 'center',textAlign: 'center', justifyContent: 'center'}}>
        <Avatar
          sx={{ margin: "auto", width: 100, height: 100 }}
          src={randomData?.picture.large}
          alt={"Random Picture"}
        />
          <Property label="ID:" data={userData?.ID} />

        <Grid container>
          <Property
            icon="user"
            data={`${randomData?.name.first} ${randomData?.name.last}`}
          />
          <Property icon="language" data={userData?.Language} />
          <Property icon="venus-mars" data={userData?.Gender} />
          <Property
            icon="calendar"
            data={new Date(userData?.Age).toLocaleDateString()}
          />
          <Property icon="briefcase-medical" data={userData?.Procedore} />
          <Property icon="mobile-alt" data={randomData?.cell} />
          <Property icon="phone" data={randomData?.phone} />
          <CircularProgress variant="determinate" value={50} />
          <Grid>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              Mail Sent
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Patient;
