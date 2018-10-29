const express = require('express');
const router = express.Router();
const Customer = require('../controller/customer');

router.get('/', (req, res) => {
    Customer.getCustomer()
    .then(customers => res.send(customers))
    .catch(err => res.send(err.message));
});

module.exports = router;