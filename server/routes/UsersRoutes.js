const express = require("express");
const router = express.Router();
const {postUserController, getOneUserController} = require("../controllers/UsersControllers");

router.post("/user", postUserController);
router.get("/:id", getOneUserController);

module.exports = router;