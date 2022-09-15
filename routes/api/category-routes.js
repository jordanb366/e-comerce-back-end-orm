const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// Get route for category
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get route for category by id
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
      },
    ],
  }).then((categoryId) => {
    // returns the response .json
    res.json(categoryId);
  });
});
// Create category route
router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      // returns the response .json
      res.json(newCategory);
    })
    // Catch any errors
    .catch((err) => res.json(err));
});
// Update category by id
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCategory) => {
      // returns the response .json
      res.json(updatedCategory);
    })
    // Catch any errors
    .catch((err) => res.json(err));
});
// Delete category route by id
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      // Response .json that was deleted
      res.json(deletedCategory);
    })
    // Catch any errors
    .catch((err) => res.json(err));
});
// Exports route
module.exports = router;
