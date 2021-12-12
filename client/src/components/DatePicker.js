import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

export default function DatePicker() {
  const [value, setValue] = useState(new Date());

  return (
    <StaticDatePicker
      toolbarTitle={null}
      orientation="portait"
      openTo="day"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
