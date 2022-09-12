const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findByAll({
    include: [
      {
        model: Product,
        ProductTag,
      },
    ],
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        ProductTag,
      },
    ],
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body).then((newTag) => {
    res.json(newTag);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.params.id, {
    include: [
      {
        model: Product,
        ProductTag,
      },
    ],
  }).then((updatedTag) => {
    res.json(updatedTag);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(req.params.id, {}).then((deletedTag) => {
    res.json(deletedTag);
  });
});

module.exports = router;
