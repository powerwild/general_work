import express from 'express';
import { Question } from '../models/question.js';


const router = express.Router();

router.route('/')
.get((_req, res) => {
    Question.find().then(questions => res.json(questions)).catch(e => res.status(404).json(e));
})


export const questions = router;
