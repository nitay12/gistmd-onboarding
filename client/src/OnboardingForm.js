import React, { useEffect } from "react";
import CustomizedStepper from "./components/Stepper/Stepper";

import { useSelector, useDispatch } from "react-redux";
import {
  questionsSelector,
  getAllQuestions,
  getQuestionOptions,
} from "./redux/slices/questionsSlice";
import Question from "./components/Question";

function App() {
  const dispatch = useDispatch();
  const { questions, currentQuestion } =
    useSelector(questionsSelector);
  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);
  useEffect(() => {
    if (Object.keys(currentQuestion).length !== 0){
      dispatch(getQuestionOptions(currentQuestion.ID));
    }
  }, [currentQuestion, dispatch]);
  const steps = questions.map((question) => question.name);
  const icons = {};
  questions.map((question, index) => (icons[index + 1] = question.icon));
  return (
    <div className="App">
      <>
        <CustomizedStepper
          activeStep={currentQuestion.ID}
          steps={steps}
          icons={icons}
        />
        <Question />
      </>
    </div>
  );
}

export default App;
