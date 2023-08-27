import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

//Routes
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import quizRouter from './routes/quizRouter.js';
import submitRouter from './routes/submitRouter.js';

// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

//middleware
import { authenticateUser } from './middleware/authMiddleware.js';

import cookieParser from 'cookie-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.use('/api/v1/quiz',authenticateUser, quizRouter);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authenticateUser, userRouter);

app.use('/api/v1/submit', authenticateUser, submitRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log("server")
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}