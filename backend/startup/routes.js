const express = require('express');
const product_types = require('../routes/product_types');
const customers = require('../routes/customers');
const products = require('../routes/product');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const returns = require('../routes/returns');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/product_types', product_types);
  app.use('/api/customers', customers);
  app.use('/api/products', products);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);
}

