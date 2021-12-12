import * as React from "react";
//MUI imports
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
//Customized components
import CustomizedConnector from "./Connector";
import CustomizedStepLabel from "./StepLabel";

export default function CustomizedStepper(props) {
  const { steps, activeStep, icons } = props;
  return (
    <Stack sx={{ width: "100%" }} spacing={3}>
      <Stepper
        
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomizedConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <CustomizedStepLabel icons={icons} label={label} />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
