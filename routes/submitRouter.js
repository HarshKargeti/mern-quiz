import { Router } from "express";
const router = Router()

import {quizSubmit, getScore, deleteScore } from "../controllers/submitController.js";

router.route('/').post(quizSubmit).get(getScore).delete(deleteScore)


export default router;