const {getOneQuestionService, getQuestionsService, getOptionsService} = require("../services/QuestionsServices")

const getQuestionsController = async (req, res) => {
  try {
    const result = await getQuestionsService();
    res.send(result);
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOneQuestionController = async (req, res) => {
  const { questionId } = req.params;
  try {
    const result = await getOneQuestionService(questionId);
    res.send(result);
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOptionsController = async (req, res) => {
  const { questionId } = req.params;
  try {
    const result = await getOptionsService(questionId);
    res.send(result);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {getQuestionsController, getOneQuestionController, getOptionsController}
