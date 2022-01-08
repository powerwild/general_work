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

app.route('/pasta/create')
.get(csrfProtection, asyncHandler(async(req, res) => {
  const noodles = await Noodle.findAll();
  const sauces = await Sauce.findAll();
  res.render('create-pasta', {noodles, sauces, csrfToken: req.csrfToken()})
}))
.post(csrfProtection, asyncHandler(async(req, res) => {

  res.redirect('/');
}));

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}`));

/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
