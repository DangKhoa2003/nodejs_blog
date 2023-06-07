const express = require('express');
const router = express.Router();
const SiteController = require('../app/controller/SiteController');

router.use('/search', SiteController.search);
router.use('/', SiteController.home);

module.exports = router;
