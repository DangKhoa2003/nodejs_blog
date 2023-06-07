const express = require('express');
const router = express.Router();

const NewController = require('../app/controller/NewsController');

router.use('/', NewController.index);

module.exports = router;
