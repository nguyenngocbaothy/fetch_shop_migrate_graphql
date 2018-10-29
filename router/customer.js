const express = require('express');
const router = express.Router();
const Customer = require('../controller/customer');

router.get('/', (req, res) => {
    Customer.getCustomer()
    .then(customers => res.send(customers))
    .catch(err => res.send(err.message));
});

router.post('/', (req, res) => {
    Customer.createCustomer(req.body)
    .then(customer => res.send(customer))
    .catch(err => res.send(err.message));
});

router.put('/:id', (req, res) => {
    Customer.updateCustomer(req.body, req.params.id)
    .then(customer => res.send(customer))
    .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {
    Customer.deleteCustomer(req.params.id)
    .then(customer => res.send(customer))
    .catch(err => res.send(err.message));
});

module.exports = router;