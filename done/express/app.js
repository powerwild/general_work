const express = require('express');

const app = express();

app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head><title>Welcome</head></title>
//       <body>
//         <h1>Hello from Express!</h1>
//       </body>
//     </html>
//   `);
// });

app.all('*', (req, res) => {
    // const pageData = { title: 'Welcome', heading: 'Home' };
    res.render('layout', { title: 'Pug Template Syntax Sandbox', heading: 'Welcome to the Sandbox!', firstName: 'Grace', lastName: 'Hopper', colors: ['Red', 'Green', 'Blue']})
});

app.get([/^\/(our-)?produ?ct{1,2}s?\/?$/i, '/productos'], (req, res) => {
    // If the current request path doesn't match our preferred
    // route path then redirect the client.
    if (!req.path.toLowerCase().startsWith('/products')) {
      res.redirect('/products');
    }

    res.send('Products');
   });

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));
