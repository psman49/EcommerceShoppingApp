const router = require('express').Router();

router.use('/prove01', require('./prove01'));
router.use('/prove02', require('./prove02'));
router.use('/prove10', require('./prove10'));
router.use('/prove11', require('./prove11'));


module.exports = router;