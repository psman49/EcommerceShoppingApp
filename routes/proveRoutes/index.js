const router = require('express').Router();

router.use('/prove01', require('./prove01'));
router.use('/prove02', require('./prove02'));


module.exports = router;