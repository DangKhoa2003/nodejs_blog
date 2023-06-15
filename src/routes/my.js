const express = require("express");
const router = express.Router();

const MyController = require("../app/controller/MyController");


router.get("/stored/:slug", MyController.stored);
router.get("/trash/:slug", MyController.trash);



module.exports = router