const express = require("express");
const router = express.Router();
const {
  getQuestionsController,
  getOneQuestionController,
  getOptionsController,
} = require("../controllers/QuestionsControllers");

router.get("/", getQuestionsController);
router.get("/:questionId", getOneQuestionController);
router.get("/:questionId/options", getOptionsController);

module.exports = router;