import Question from '../models/questionModels.js';

import { StatusCodes } from 'http-status-codes';

export const addAllQuestions = async (req, res) => {
  console.log(req.user.userId);
  const question = await Question.create(req.body);

  res.status(StatusCodes.CREATED).json({ question });
}
export const getAllQuestions = async (req, res) => {
  const question = await Question.find({});

  res.status(StatusCodes.OK).json({ question });
};



export const getQuestions = async (req, res) => {
  const { language, level } = req.params;
  
   const question = await Question.find({language: language, level: level });

  res.status(StatusCodes.OK).json({ question });
}