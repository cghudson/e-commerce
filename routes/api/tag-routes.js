const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

  // find all tags and the associated Product data
router.get("/", (req, res) => {
  Tag.findAll({
    include: [{ model: Product, through: ProductTag }],
  })
    .then((tagData) => res.status(200).json(tagData))
    .catch((err) => res.status(400).json(err));
});

  // find a single tag by its `id` and its associated Product data
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [{ model: Product, through: ProductTag }],
  })
    .then((tagData) => res.status(200).json(tagData))
    .catch((err) => res.status(400).json(err));
});

  // create a new tag
router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tagData) => res.status(200).json(tagData))
    .catch((err) => res.status(400).json(err));
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {where: {id: req.params.id}})
  .then(tagData => res.status(200).json({message: 'This tag has been updated'}))
  .catch(err => res.status(400).json(err)) 
});

  // delete on tag by its `id` value
router.delete("/:id", (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((tagData) => res.status(200).json({message: "This tag has been deleted"}))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
