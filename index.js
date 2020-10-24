
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
require('dotenv').config()
const PORT = process.env.PORT || 5005 // So we can run on heroku || (OR) localhost:5000




const cors = require('cors') // Place this with other requires (like 'path' and 'express')
const corsOptions = 
{
    origin: "https://cse341-samuelosekeny.herokuapp.com/",
    optionsSuccessStatus: 200
};

const options = 
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://ose1:Maling49@cluster0.unrpp.mongodb.net/shop?retryWrites=true&w=majority";
                      

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});

const csrfProtection = csrf();

app.use(bodyParser({extended: false})) // For parsing the body of a POST
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}));
app.use(csrfProtection);
app.use(flash());

app.use(cors(corsOptions));

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if(!user) {
        return next();
      }
      req.user = user;
      next();
    })
    // .catch(err => console.log(err));
    .catch(err => {
      next(new Error(err));
    });
});

app.use((req, res, next)=> {
 res.locals.isAuthenticated = req.session.isLoggedIn;
 res.locals.csrfToken = req.csrfToken();
 next();
});



// Route setup. You can implement more in the future!
const routes = require('./routes');

app
   .use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   
   .use('/', routes)
   .get('/', (req, res, next) => {
     // This is the primary index, always handled last. 
     res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
    })
   .use((req, res, next) => {
     // 404 page
     res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
   })

    //session middleware

   
mongoose.connect(MONGODB_URL, options)
  .then(result => {
     // This should be your user handling code implement following the course videos
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
