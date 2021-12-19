import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsSelector,
  nextQuestion,
  previousQuestion,
  submitFormAsync,
} from "../redux/slices/questionsSlice";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

function NavButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    currentQuestion,
    userSelectedOptions,
    questions,
    loading,
  } = useSelector(questionsSelector);
  const selectedOption = userSelectedOptions[currentQuestion.name];
  const finalStep = currentQuestion.ID === questions.length - 1;
  const handleSubmit = async () => {
    try {
      const {payload} = await dispatch(submitFormAsync(userSelectedOptions))
      console.log(payload);
      navigate(`/patients/${payload.id}`);
    } catch (err) {
      console.error("Submition failed", err);
    }
  };
  return (
    <>
      {selectedOption !== undefined ? (
        <LoadingButton
          variant="contained"
          loading={loading}
          color={finalStep ? "success" : "primary"}
          sx={{
            position: "absolute",
            right: 10,
            bottom: 20,
          }}
          onClick={() => {
            finalStep ? handleSubmit() : dispatch(nextQuestion());
          }}
        >
          {finalStep ? "Submit" : "Next"}
        </LoadingButton>
      ) : null}
      {currentQuestion.ID > 0 ? (
        <LoadingButton
          variant="contained"
          loading={loading}
          sx={{
            position: "absolute",
            left: 10,
            bottom: 20,
          }}
          onClick={() => {
            dispatch(previousQuestion());
          }}
        >
          Previous
        </LoadingButton>
      ) : null}
    </>
  );
}

export default NavButtons;
