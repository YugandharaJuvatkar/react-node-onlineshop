const router = require("express").Router();
const Product = require("../models/Product");

//CREATE PRODUCT
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    const saveproduct = await newProduct.save();
    res.status(200).json(saveproduct);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (e) {
    res.status(500).json(e);
  }
});

//DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    //await product.delete();
    res.status(200).json("Product is deleted");
  } catch (e) {
    res.status(500).json(e);
  }
});
//ALL PRODUCT
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json(e);
  }
});
//PRODUCT BY ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json(e);
  }
});
module.exports = router;
