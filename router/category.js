const express = require('express');
const router = express.Router();
const Category = require('../controller/category');

router.get('/', (req, res) => {
    Category.getCategory()
    .then(categorys => res.send(categorys))
    .catch(err => res.send(err.message));
});

router.post('/', (req, res) => {
    Category.createCategory(req.body)
    .then(category => res.send(category))
    .catch(err => res.send(err.message));
});

router.put('/:id', (req, res) => {
    Category.updateCategory(req.body, req.params.id)
    .then(category => res.send(category))
    .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {
    Category.deleteCategory(req.params.id)
    .then(category => res.send(category))
    .catch(err => res.send(err.message));
});

module.exports = router;