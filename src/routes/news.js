const express = require('express');
const router = express.Router();

import NewController from '../app/controller/NewsController';

router.use('/', NewController.index);

export default router;
