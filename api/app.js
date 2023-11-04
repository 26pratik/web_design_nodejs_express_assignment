import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
import models from './models/index.js';

const app = express();

mongoose.connect('mongodb+srv://26pratik:qwerty1234@cluster0.dbjcn.mongodb.net/toDoA');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;