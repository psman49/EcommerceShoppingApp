const express = require('express');
const router = express.Router();

var io = require('socket.io')();

//Path to your JSON File, although it can be hardcorded in this file
const dummyData = require('../../Data/prove10-data.json')

router.get('/',(req,res,next)=> {
    res.render('pages/proveAssignments/prove11/prove11.ejs', {
        title: 'Prove 11',
        path: '/prove11',
    });
});

router.get('/fetchAll', (req,res,next)=> {
    res.json(dummyData);
});

router.post('/insert',(req,res,next) => {
    const avenger = req.body.newAvenger;
    const power = req.body.newPower
    let dupe = false;
    for (let a of dummyData.avengers)
    {
        if (a.name == avenger)
        {
            if (a.power != power)
            {
                a.power = power;
            }
            dupe = true;
        }
    }
    if (!dupe)
    {
        dummyData.avengers.push({name:avenger,power:power})
    }
    res.json(dummyData)
});
module.exports = router;