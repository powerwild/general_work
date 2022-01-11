const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const { Entree, EntreeType} = require('./models');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const csrfProtection = csrf({cookie: true});

const asyncHandler = (handler) => {
  return ((req, res, next) => {
      return handler(req, res, next).catch(next)
  })
};



app.get('/', asyncHandler(async(req, res) => {
  const entrees = await Entree.findAll({include: {model: EntreeType}});
  res.render('home', {entrees});
}));

app.get('/entrees/new', csrfProtection, asyncHandler(async(req, res) => {
  const entreeTypes = await EntreeType.findAll();
  res.render('entree-form', {entreeTypes, csrfToken: req.csrfToken()});
}));


app.post('/entrees', csrfProtection, asyncHandler(async(req, res) => {
  const { name, description, price, entreeTypeId } = req.body;
  const entree = await Entree.create({
    name,
    description,
    price,
    entreeTypeId
  });
  res.redirect('/');
}));


/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
