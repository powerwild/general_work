const express = require('express');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();
app.use(express.json());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


app.listen(8081, () => {console.log('App listening on port 8081...')})
