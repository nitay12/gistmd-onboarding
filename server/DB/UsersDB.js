const mysql = require("mysql2/promise");
const con = require("./config");
const db = mysql.createPool(con);
const getOneUserDb = async (id) => {
  try {
    const sqlGet = `SELECT * FROM users WHERE id=${id};`;
    const [result] = await db.execute(sqlGet, [id]);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
const postUserDb = async ({Language,Gender,Age,Procedore}) => {
  try {
    const sqlPost = `INSERT INTO gistmd.users (Language, Gender, Age, Procedore) VALUES ('${Language}', '${Gender}', '${Age}', '${Procedore}');`
    const [result] = await db.execute(sqlPost);
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = { postUserDb, getOneUserDb };
