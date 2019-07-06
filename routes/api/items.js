const express = require("express");
const Item = require("../../models/Item");

const router = express.Router();

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(() => res.status(400).send(`Could not find any item`));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem
    .save()
    .then(item => res.json(item))
    .catch(() => res.status(400).send(`Could not add ${req.body.name}`));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item =>
      item
        .remove()
        .then(() => res.send(`${req.body.name} successfully deleted`))
    )
    .catch(() => res.status(400).send(`Could not delete ${req.body.name}`));
});

module.exports = router;
