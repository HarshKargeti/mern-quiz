
import Submit from '../models/submitModel.js';
import { StatusCodes } from 'http-status-codes';


export const getScore = async (req, res) => {
  const score = await Submit.find({createdBy: req.user.userId});
  res.status(StatusCodes.OK).json({ score });
};

export const quizSubmit = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const qsubmit = await Submit.create(req.body);
  res.status(StatusCodes.OK).json({ qsubmit });
};

export const deleteScore = async (req, res) => {
  const id = req.user.userId;
  const qsubmit = await Submit.deleteMany({createdBy: id});
  res.status(StatusCodes.OK).json("delete");
};