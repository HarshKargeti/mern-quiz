import { Router } from "express";
const router = Router()

import { addAllQuestions, getAllQuestions, getQuestions } from "../controllers/quizController.js";
router.route('/').post(addAllQuestions).get(getAllQuestions)
router.route('/:language/:level').get(getQuestions)

export default router;