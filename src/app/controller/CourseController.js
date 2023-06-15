const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  update(req, res, next) {
    // updateOne(điều kiện, dữ liệu muốn xóa)
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/my/stored/course"))
      .catch(next);
  }

  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("/my/stored/course"))
      .catch(next);
  }

  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  destroyForce(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  deleteMultiple(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.inputIsCheckCourse } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json("Error: Action invalid");
    }
  }

  handleCourse(req, res, next) {
    switch (req.body.action) {
      case "restore":
        Course.restore({ _id: { $in: req.body.inputIsCheckCourse } })
          .then(() => res.redirect("/my/stored/course"))
          .catch(next);
        break;
      case "permanentlyDelete":
        Course.deleteMany({ _id: { $in: req.body.inputIsCheckCourse } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json("Error: Action invalid");
    }
  }
}

module.exports = new CourseController();
