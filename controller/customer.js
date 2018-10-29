const Customer = require('../models/').Customer;

module.exports = {
    getCustomer
};

async function getCustomer() {
    const customers = await Customer.findAll({})
    .catch(err => {throw new Error('Error to get customers')})

    return customers;
}

