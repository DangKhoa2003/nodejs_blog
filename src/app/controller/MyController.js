const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MyController {
  stored(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, count]) =>
        res.render("my/stored-courses", {
          count,
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(() => {});
  }

  trash(req, res, next) {
    Course.findDeleted()
      .then((courses) =>
        res.render("my/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MyController();
