const Customer = require('../models/').Customer;

module.exports = {
    getCustomer,
    createCustomer
};

async function getCustomer() {
    const customers = await Customer.findAll({})
        .catch(err => { throw new Error('Error to get customers') })

    return customers;
}

async function createCustomer(payload) {
    const customer = await Customer.create(payload)
        .catch(err => { throw new Error('Error to create customers') })

    return customer;
}

