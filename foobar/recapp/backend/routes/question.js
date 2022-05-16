import express from 'express';
import { Question } from '../models/question.js';
const mock_questions = [
    { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
    { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
    { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
];

const router = express.Router();

router.route('/')
.get((_req, res) => {
    Question.find().then(questions => res.json(questions)).catch(e => res.status(404).json(e));
})
.post((req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content,
        link: req.body.link
    });
    newQuestion.save().then(question => res.json(question)).catch(e => res.status(422).json(e));
})


router.put('/:question_id', (req, res) => {
    Question.findOneAndUpdate(req.params.question_id, {isAnswered: true}, {new: true})
        .then(question => res.json(question)).catch(e => res.status(422).json(e));
})



router.delete('/:question_id', (req, res) => {
    Question.findOneAndDelete({_id: req.params.question_id})
        .then( () => res.json({_id: req.params.question_id}))
            .catch(e => res.status(404).json(e));
})



export const questions = router;
