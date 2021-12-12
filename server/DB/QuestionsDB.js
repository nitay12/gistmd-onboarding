const mysql = require("mysql2/promise");
const con = require("./config");
const db = mysql.createPool(con);

const getQuestionsDb = async () => {
  try {
    const sqlGet = `SELECT * FROM questions`;
    const [result] = await db.execute(sqlGet);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOneQuestionDb = async (questionId) => {
  try {
    const sqlGet = `SELECT * FROM questions WHERE id=${questionId};`;
    const [result] = await db.execute(sqlGet, [questionId]);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
const getOptionsDb = async (questionId) => {
  try {
    const sqlGet = `SELECT * FROM options WHERE questionId=${questionId};`;
    const [result] = await db.execute(sqlGet, [questionId]);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = { getQuestionsDb, getOneQuestionDb, getOptionsDb };
