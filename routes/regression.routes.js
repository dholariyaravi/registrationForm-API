module.exports = (app) => {
  const regression = require("../controller/regression.controller.js");

  var router = require("express").Router();

  router.post("/", regression.create);

  router.get("/", regression.findAll);

  router.put("/:id", regression.update);

  router.delete("/:id", regression.delete);

  app.use("/api/regression", router);
};
