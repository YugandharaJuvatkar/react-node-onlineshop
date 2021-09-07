// const Joi = require('joi');
// const mongoose = require('mongoose');

// const product_typeSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//     minlength: 3,
//     maxlength: 50
//   }
// });

// const Product_type = mongoose.model('Product_type', product_typeSchema);

// function validateType(product_type) {
//   const schema = {
//     type: Joi.string().min(3).max(50).required()
//   };

//   return Joi.validate(product_type, schema);
// }

// exports.product_typeSchema = product_typeSchema;
// exports.Product_type = Product_type; 
// exports.validate = validateType;
