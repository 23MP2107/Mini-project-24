// require('dotenv').config();

const express = require('express');
const app = express();
// const cookieParser = require('cookie-parser');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);
const userRoutes = require('./routes/user'); // Assuming you have user routes
app.use('/', userRoutes); // This will handle the root route

// Use express-ejs-layouts
app.use(ejsLayouts);
app.set('layout', 'admin/layout'); // Set default layout for admin routes

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const connectWithDb = require('./config/database');
// connectWithDb();

// let userRoute = require('./routes/user');
// let adminRoute = require('./routes/admin');

// Route handlers
app.get('/', (req, res) => {
  const isUserLoggedIn = false;  // Example logic, replace with actual login status
  const items = [];  // Replace with actual items data
  const sub = '';  // Example subscription message, replace with actual message
  res.render('main', { title: 'Home', islogin: isUserLoggedIn, items: items, sub: sub });
});

app.get('/login', (req, res) => {
  res.render('login', { msg: '', islogin: false });  // Example message, replace with actual message if needed
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/contact', (req, res) => {
  res.render('contact') // Render your contact page
});

app.get('/sell', (req, res) => {
  res.render('sell'); // Render the sell.ejs page
});

app.get('/auctions', (req, res) => {
  res.render('auctions'); // Render your contact page
});

// app.get('/admin/ongoing', (req, res) => {
//   res.render('admin/ongoing'); // Make sure this view exists
// });

// app.get('/admin/add', (req, res) => {
//   res.render('admin/add'); // Make sure this view exists
// });

// app.get('/admin/previous', (req, res) => {
//   res.render('admin/previous'); // Make sure this view exists
// });

// app.get('/admin/subscriptions', (req, res) => {
//   res.render('admin/subscriptions'); // Make sure this view exists
// });

// app.get('/admin/sell-requests', (req, res) => {
//   res.render('admin/sell-requests'); // Make sure this view exists
// });
// app.use('/', userRoute);
// app.use('/admin', adminRoute);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('app running on port ', port);
});
