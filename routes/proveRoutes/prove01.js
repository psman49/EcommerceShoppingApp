const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/proveAssignments/prove01/simpleform', { 
        title: 'Prove Assignment 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    console.log(req.body.i1)
    console.log(req.body.i2)
 res.render('pages/proveAssignments/prove01/displayform', { 
        title: 'Prove Assignment 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        first: req.body.i1,
        second: req.body.i2

    });
});

module.exports = router;