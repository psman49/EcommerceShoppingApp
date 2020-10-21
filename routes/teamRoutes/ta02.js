//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

// Requirement for step 1

const userArray =[];

// step 2 requirement

router.post('/addUser',(req,res,next) => {
  const newUser = req.body.newUser;
  userArray.push(newUser);
  res.redirect('/ta02');
});

// requirement for step 03
router.post('/removeUser', (req,res,next) => {
  const remUser = req.body.remUser;

  // removing from the  const array using splice method.

  const index = userArray.indexOf(remUser);
  if (index !== -1 ) {
      userArray.splice(index,1);
      res.redirect('/ta02');
  }

});


router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        users: userArray,
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;