const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Product_type, validate } = require("../models/product_type");
const mongoose = require("mongoose");
 const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const product_types = await Product_type.find()
    .select("-__v")
    .sort("name");
  res.send(product_types);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product_type = new Product_type({ type: req.body.type });
  product_type = await product_type.save();

  res.send(product_type);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product_type = await Product_type.findByIdAndUpdate(
    req.params.id,
    { type: req.body.type },
    {
      new: true
    }
  );

  if (!product_type)
    return res.status(404).send("The product type with the given ID was not found.");

  res.send(product_type);
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const product_type = await Product_type.findByIdAndRemove(req.params.id);

  if (!product_type)
    return res.status(404).send("The product type with the given ID was not found.");

  res.send(product_type);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const product_type = await Genre.findById(req.params.id).select("-__v");

  if (!product_type)
    return res.status(404).send("The product type with the given ID was not found.");

  res.send(product_type);
});

 module.exports = router;
