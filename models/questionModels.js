import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
    {
        language: Number,
        level: Number,
        // difficulty: String,
        question: String,
        correct_answer: String,
        incorrect_answers: [String],
    }
)

export default mongoose.model('Question', QuestionSchema);