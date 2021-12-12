import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllQuestions = createAsyncThunk(
  "questions/getALlQuestions",
  async (thunkAPI) => {
    try {
      const response = await axios.get("api/questions");
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getQuestionOptions = createAsyncThunk(
  "questions/getQuestionOptions",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`api/questions/${id}/options`);
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const submitFormAsync = createAsyncThunk(
  "questions/submitFormAsync",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`api/users/user`, userData);
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    options: [],
    currentQuestion: {},
    loading: false,
    error: {},
    userSelectedOptions: {},
  },
  reducers: {
    nextQuestion(state) {
      if (state.currentQuestion.ID < state.questions.length - 1) {
        state.currentQuestion = state.questions[state.currentQuestion.ID + 1];
      }
    },
    previousQuestion(state) {
      if (state.currentQuestion.ID > 0) {
        state.currentQuestion = state.questions[state.currentQuestion.ID - 1];
      }
    },
    selectOption(state, { payload }) {
      state.userSelectedOptions[state.currentQuestion.name] = payload;
    },
  },
  extraReducers: {
    [getAllQuestions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.questions = payload;
      state.currentQuestion = state.questions[0];
      getQuestionOptions(0);
    },
    [getAllQuestions.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllQuestions.rejected]: (state, action) => {
      console.log(action);
      state.error = action;
      state.loading = false;
    },
    [getQuestionOptions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.options = payload;
    },
    [getQuestionOptions.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getQuestionOptions.rejected]: (state, action) => {
      console.log(action);
      state.error = action;
      state.loading = false;
    },
    [submitFormAsync.fulfilled]: (state, { payload }) => {
      state.submittedUser = payload;
      state.loading = false;
    },
    [submitFormAsync.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [submitFormAsync.rejected]: (state, action) => {
      state.error = action;
      state.loading = false;
    },
  },
});
export const { nextQuestion, previousQuestion, setOption, selectOption } =
  questionsSlice.actions;
export const questionsSelector = (state) => state.questions;
export default questionsSlice.reducer;
