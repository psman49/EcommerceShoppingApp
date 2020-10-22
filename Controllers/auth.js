const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('pages/shopStuff/auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.getSignup = (req, res, next) => {
  res.render('pages/shopStuff/auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};
exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email:email})
    .then(user => {
      if (!user) {
        return res.redirect('/auth/login');
      }
       bcrypt
       .compare(password, user.password)
       .then(doMatch => {
         if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/shop');
          }); 
         }
         res.redirect('/auth/login');
       })
       .catch(err => {
         console.log(err);
         res.redirect('/auth/login');
       }) 
    })
    .catch(err => console.log(err));
};


exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({email: email})
  .then(userDoc => {
    if (userDoc) {
      return res.redirect('/auth/signup');
    }
    return bcrypt.hash(password, 12)
    .then(hashedPassword => {
      const user = User({
        email: email,
        password:hashedPassword,
        cart: { items: [] }
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/auth/login');
    }); 
  })
   .catch(err=> {
    console.log(err);
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/auth/login');
  });  
};