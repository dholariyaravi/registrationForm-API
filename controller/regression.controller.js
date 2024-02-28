const db = require("../model");
const name1 = db.regression;

// ====================
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const name11 = new name1({
    name: req.body.name,
    parentsname: req.body.parentsname,
    studentmobile: req.body.studentmobile,
    parentmobile: req.body.parentmobile,
    email: req.body.email,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    whatsapp: req.body.whatsapp,
    education: req.body.education,
    address: req.body.address,
    city: req.body.city,
    takenby: req.body.takenby,
    leadsource: req.body.leadsource,
  });

  // Save Tutorial in the database
  name11
    .save(name11)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  // let a = "xsdhdhh";
  // let d = a.toFixed();

  try {
    name1
      .find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
  } catch {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials.",
    });
  }
};

//   =================================================
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  name1
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

// =====================================

exports.delete = (req, res) => {
  const id = req.params.id;

  name1
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
