import mongoose from "mongoose";

const submitSchema = new mongoose.Schema(
    {
        name: String,
        language: Number,
        level: Number,
        score: Number,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
          },
    }
)

export default mongoose.model('Submit', submitSchema);
