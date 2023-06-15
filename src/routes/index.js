const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");
const myRouter = require("./my");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/course", courseRouter);
  app.use("/my", myRouter);
  app.use("/", siteRouter);
}

module.exports = route;
