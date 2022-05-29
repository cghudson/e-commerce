const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

  // find all categories and associated Products
router.get("/", (req, res) => {
  Category.findAll({ include: [Product] })
    .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => res.status(400).json(err));
});

  // find one category by its `id` value and its associated Products
router.get("/:id", (req, res) => {
  Category.findOne({ where: { id: req.params.id }, include: [Product] })
    .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => res.status(400).json(err));
});

  // create a new category
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => res.status(400).json(err));
});

  // update a category by its `id` value
router.put("/:id", (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then((categoryData) => res.status(200).json({message: 'This category has been updated'}))
    .catch((err) => res.status(400).json(err));
});

  // delete a category by its `id` value
router.delete("/:id", (req, res) => {
  Category.destroy({ where: { id: req.params.id } })
    .then((categoryData) => res.status(200).json({message: 'This category has been deleted.'}))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
