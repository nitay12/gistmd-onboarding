const { postUserDb, getOneUserDb } = require("../DB/UsersDB");
const { sqlDateFormatter } = require("../utils/sqlDateFormmater");
const getOneUserService = async (id) => {
  try {
    const [res] = await getOneUserDb(id);
    return res
  } catch (e) {
    throw new Error(e.message);
  }
};
const postUserService = async (userData) => {
  try {
    const formattedDate = sqlDateFormatter(userData.Age)
    userData.Age = formattedDate;
    const response = await postUserDb(userData);
    return ({id:response.insertId})
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { postUserService, getOneUserService };
