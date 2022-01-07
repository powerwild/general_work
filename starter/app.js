const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const csrfProtection = csrf({cookie: true});

const hairColors = ['Auburn', 'Black', 'Blonde', 'Brown', 'Red', 'White', 'Other'];
const people = [];

const validateForm = (req, res, next) => {
  const { firstName, lastName, hairColorId} = req.body;
  req.errors = [];
  if (!firstName) req.errors.push('Person must have a first name.');
  if (!lastName) req.errors.push('Person must have a last name.');
  if (!hairColorId) req.errors.push('Person must have a hair color.');
  next();
};


app.get('/', (req, res) => {
  res.render('home', {people});
});

app.route('/new-person')
.get(csrfProtection, (req, res) => {
  res.render('new-person', {csrfToken: req.csrfToken(), hairColors})
})
.post(csrfProtection, validateForm, (req, res) => {
  const { firstName, lastName, age, biography, hairColorId} = req.body;
  if (req.errors.length > 0) {
    res.status(500).render('new-person', {firstName, lastName, age, biography, hairColorId, errors: req.errors, csrfToken: req.csrfToken(), hairColors})
  } else {
    people.push({
      firstName,
      lastName,
      age,
      biography,
      hairColorId
    });
    res.redirect('/')
  }
});

// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV === 'production') {

//   } else {
//       console.error(err)
//   }
//   next(err);
// });

// app.use((err, req, res, next) => {
//   if (err.status === 404) {
//     res.status(404);
//     res.render('page-not-found', {
//       title: 'Page Not Found',
//     });
//   } else {
//     next(err);
//   }
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     const isProduction = process.env.NODE_ENV === 'production';
//     res.render('error', {
//         title: 'Server Error',
//         message: isProduction ? null : err.message,
//         stack: isProduction ? null : err.stack
//     });
// });

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));


/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}
