const express = require('express');
const router = express.Router();

const dummyData = require('../../Data/prove10-data.json')
router.get('/',(req, res, next) => {
    res.render('pages/proveAssignments/prove10/prove10', { 
        title: 'Prove Assignment 10', 
        path: '/prove101'
    });
});
router.get('/fetchAll',(req,res,next) => {
    console.log(dummyData);
    res.json(dummyData);

    //fetching dummyData
})


router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/

    const avenger = req.body.name;
    let duplicate = false;
    // const index = dummyData.avengers.indexOf
    // console.log(index)
    for (let a of dummyData.avengers)
    {
        if (a.name == avenger)
        {
            duplicate = true;
        }
    }
    if (!duplicate)
    {
        dummyData.avengers.push({name:avenger})
    }
    res.json(dummyData)

    });

module.exports = router;