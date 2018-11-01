const Customer = require('../models/').Customer;

module.exports = {
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
/**
 * @api {get} /customer/ Request Get customer information
 * @apiName GetCustomer
 * @apiGroup Customer
 *
 *
 * @apiSuccess {String} forename Forename of the Customer.
 * @apiSuccess {String} surname Surname of the Customer.
 * @apiSuccess {String} add1 Address1 of the Customer.
 * @apiSuccess {Integer} postcode Postcode of the Customer.
 * @apiSuccess {Integer} phone Phone of the Customer.
 * @apiSuccess {String} email Email of the Customer.
 * @apiSuccess {Boolean} registered Customer has registered.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "forename": "John",
 *       "surname": "Doe",
 *       "add1": "123abc"
 *       "postcode": "8888"
 *       "phone": "0123456789"
 *       "email": "john@gmail.com"
 *       "registered": "false"
 *     }
 *
 * @apiError Error Error to get customers.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
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

async function deleteCustomer(customerId) {
    const customer = await Customer.findById(customerId)
        .catch(err => { throw new Error('Error to find customers') })
    if (!customer) { throw new Error('Can not find customer') }

    const customerDelete = await customer.destroy()
        .catch(err => { throw new Error('Error to delete customer') })

    return customerDelete;
}

