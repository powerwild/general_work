const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const { Pasta, Noodle, Sauce } = require('./models');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use((req, res, next) => {
  req.setTimeout(1000, () => {
    res.status(500).end();
  });
  res.setTimeout(1000, () => {
    res.status(500).end();
  });
  next();
});
const csrfProtection = csrf({cookie: true});

const asyncHandler = (handler) => {
  return ((req, res, next) => {
      return handler(req, res, next).catch(next)
  })
};

app.get('/', asyncHandler(async(req, res) => {
  const pastaList = await Pasta.findAll({include: [{model: Noodle}, {model: Sauce}]});
  res.render('pasta', {pastaList});
}))


app.route('/pasta/create')
.get(csrfProtection, asyncHandler(async(req, res) => {
  const noodles = await Noodle.findAll();
  const sauces = await Sauce.findAll();
  res.render('create-pasta', {noodles, sauces, csrfToken: req.csrfToken()})
}))
.post(csrfProtection, asyncHandler(async(req, res) => {
  const { label, description, taste, sauceId, noodleId } = req.body;
  const pasta = await Pasta.create({
    label,
    description,
    taste,
    sauceId,
    noodleId,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.status(302).redirect('/');
}));

app.get('/noodle/:id', asyncHandler(async(req, res) => {
  const id = req.params.id;
  const pastaList = await Pasta.findAll({where: {noodleId: id}, include: [{model: Noodle}, {model: Sauce}]});
  res.render('pasta', {pastaList})
}));
app.get('/sauce/:id', asyncHandler(async(req, res) => {
  const id = req.params.id;
  const pastaList = await Pasta.findAll({where: {sauceId: id}, include: [{model: Sauce}, {model: Noodle}]});
  res.render('pasta', {pastaList})
}));

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
