import express from 'express';
import { Question } from '../models/question.js';


const router = express.Router();

router.route('/')
.post((req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content,
        link: req.body.link
    });
    newQuestion.save().then(question => res.json(question)).catch(e => res.status(422).json(e));
})


router.route('/:question_id')
.put((req, res) => {
    Question.findOneAndUpdate(req.params.question_id, {isAnswered: true}, {new: true})
        .then(question => res.json(question)).catch(e => res.status(422).json(e));
})
.delete((req, res) => {
    Question.findOneAndDelete({_id: req.params.question_id})
        .then( () => res.json({_id: req.params.question_id}))
            .catch(e => res.status(404).json(e));
})



export const questions = router;
