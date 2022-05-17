import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys.js';
import { questions } from './routes/question.js';
const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
        .catch(e => console.log(e));


app.use('/api/questions', questions);


const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`App listening on port ${port}`));
