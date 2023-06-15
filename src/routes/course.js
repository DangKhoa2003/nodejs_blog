const express = require("express");
const router = express.Router();

const CourseController = require('../app/controller/CourseController');

router.get("/create", CourseController.create);

router.get("/edit/:id", CourseController.edit);
router.post("/deleteMultiple", CourseController.deleteMultiple);
router.post("/handleCourse", CourseController.handleCourse);

router.put("/:id", CourseController.update);
router.patch("/restore/:id", CourseController.restore);
router.delete("/:id", CourseController.destroy);

router.delete("/deleteForce/:id", CourseController.destroyForce);

router.post("/store", CourseController.store);

router.get("/:slug", CourseController.show);

module.exports = router