const express = require('express');
const router = express.Router();
const Product = require('../controller/Product');

router.get('/', (req, res) => {
    Product.getProduct()
    .then(products => res.send(products))
    .catch(err => res.send(err.message));
});

router.post('/', (req, res) => {
    Product.createProduct(req.body)
    .then(product => res.send(product))
    .catch(err => res.send(err.message));
});

router.put('/:id', (req, res) => {
    Product.updateProduct(req.body, req.params.id)
    .then(Product => res.send(Product))
    .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {
    Product.deleteProduct(req.params.id)
    .then(Product => res.send(Product))
    .catch(err => res.send(err.message));
});

module.exports = router;