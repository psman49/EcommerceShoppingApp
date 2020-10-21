

const classRoutes = require('express').Router();

classRoutes
            .get('/', (req,res, next)=> {
                res.render('pages/classActivities', {
                   pageTitle: 'Class Activities', 
                   path: '/classActivities'});
            });

module.exports = classRoutes;