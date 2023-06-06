var express = require('express');
var router = express.Router();
import SiteController from '../app/controller/SiteController';

router.use('/', SiteController.home);
router.use('/search', SiteController.search);

export default router;
