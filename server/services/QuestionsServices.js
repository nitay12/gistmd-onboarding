const { getQuestionsDb, getOneQuestionDb, getOptionsDb } = require("../DB/QuestionsDB");
const getQuestionsService = async () => {
  try {
    return await getQuestionsDb();
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOneQuestionService = async (questionId) => {
  try {
    const [res] = await getOneQuestionDb(questionId);
    return res
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOptionsService = async (questionId) => {
  try {
    return await getOptionsDb(questionId);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getQuestionsService, getOneQuestionService, getOptionsService };
