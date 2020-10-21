const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove02/bookform', { 
        title: 'Prove Assignment 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    console.log(req.body.i1)
    console.log(req.body.i2)
 res.render('pages/prove02/bookdisplay', { 
        title: 'Prove Assignment 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        first: req.body.i1,
        second: req.body.i2

    });
});

module.exports = router;