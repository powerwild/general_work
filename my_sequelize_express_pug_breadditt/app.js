const express = require('express');
const userRouter = require('./routes/user_routes')

const app = express();
app.set('view engine', 'pug');
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

// app.get('/users', async (req, res) => {
//     const users = await User.findAll();
//     res.render('users', {users});
// });

// app.get('/users/:id', async(req, res) => {
//     const userId = req.params.id;
//     const user = await User.findByPk(userId);
//     res.render('profile', {user});
// });

const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))
