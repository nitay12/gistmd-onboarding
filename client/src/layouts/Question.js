import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsSelector,
  selectOption,
} from "../redux/slices/questionsSlice";
import { Typography, Grid, TextField, Zoom } from "@mui/material";
import { StaticDatePicker } from "@mui/lab";
import IconButton from "../components/IconButton";
import NavButtons from "../components/NavButtons";

function Question() {

  const dispatch = useDispatch();
  const { currentQuestion, userSelectedOptions, options } =
    useSelector(questionsSelector);
  const { enText, name } = currentQuestion;
  const selectedOption = userSelectedOptions[currentQuestion.name];


  //TODO: fix the IconButton warning when completed/active props are seted to true/false
  const mapOptions = options.map((option) => (
    <Zoom key={option.id} in={option.questionId === currentQuestion.ID}>
      <Grid item>
        <IconButton
          sx={{ maxWidth: 10 }}
          onClick={() => {
            dispatch(selectOption(option.name));
          }}
          active={selectedOption === option.name?("true"):(undefined)}
          completed = {undefined}
          icon={option.icon}
          title={option.name}
        />
      </Grid>
    </Zoom>
  ));

  return (
    <Grid container>
      <Grid item sm={3} xs={2} />
      <Grid
        item
        xs={8}
        sm={6}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Typography variant="text">{enText}</Typography>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {currentQuestion.name === "Age" ? (
            <Zoom in={currentQuestion.name === "Age"}>
              <div>
                <StaticDatePicker
                  toolbarTitle={enText}
                  orientation="portrait"
                  openTo="day"
                  value={selectedOption}
                  onChange={(newValue) => {
                    let formattedVal = newValue.toISOString().slice(0, 19).replace("T", " ")
                    dispatch(selectOption(formattedVal));
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </Zoom>
          ) : (
            mapOptions
          )}
        </Grid>
      </Grid>
      <NavButtons />
      <Grid item sm={3} xs={2} />
    </Grid>
  );
}

export default Question;
