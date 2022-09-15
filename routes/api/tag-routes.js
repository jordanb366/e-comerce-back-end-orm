const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
// Get route for all tags
router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        ProductTag,
      },
    ],
  })
    .then((tagData) => {
      // Returns response .json from back end
      res.json(tagData);
    })
    // Catches any errors
    .catch((err) => res.json(err));
});
// Get by id route for tags
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
  })
    .then((tagData) => {
      // Returns response .json from back end
      res.json(tagData);
    })
    // Catches any errors
    .catch((err) => res.json(err));
});

// Create route for tags
router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      // Returns the response .json from back end
      res.json(newTag);
    })
    // Catches any errors
    .catch((err) => res.json(err));
});
// Update route for tags
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedTag) => {
      // Returns response .json from back end
      res.json(updatedTag);
    })
    // Catches any errors
    .catch((err) => res.json(err));
});
// Delete route for tags
router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      // Returns response .json from back end
      res.json(deletedTag);
    })
    // Catches any errors
    .catch((err) => res.json(err));
});
// Exports route
module.exports = router;
