const express = require('express');
const router = express.Router();

const NewController = require('../app/controller/NewsController');

router.get("/:slug", NewController.show);

router.get('/', NewController.index);

module.exports = router;
