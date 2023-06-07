const Course = require("../models/Course");

class SiteController {
  home(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((err) => res.status(400).json({ err: "Error!!!" }));
    // res.render("home");
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
