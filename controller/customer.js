const Customer = require('../models/').Customer;

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer
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

async function updateCustomer(payload, customerId) {
    const customer = await Customer.findById(customerId)
        .catch(err => { throw new Error('Error to find customers') })
    if (!customer) { throw new Error('Can not find customer') }
    
    const customerUpdate = await customer.update(payload)
        .catch(err => { throw new Error('Error to update customer') })   

    return customerUpdate;
}


