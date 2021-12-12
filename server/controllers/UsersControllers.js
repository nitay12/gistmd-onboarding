const { postUserService, getOneUserService } = require("../services/UsersServices");

const getOneUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getOneUserService(id);
    res.send(result);
  } catch (e) {
    throw new Error(e.message);
  }
};
const postUserController = async (req, res) => {
  const userData = req.body;
  try {
    const result = await postUserService(userData);
    console.log(result);
    res.send(result);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { postUserController, getOneUserController };
