const Product = require('../models/').Product;
const Category = require('../models/').Category;

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};

async function getProduct() {
    const products = await Product.findAll({})
        .catch(err => { console.log(err.message) })

    return products;
}

async function createProduct(payload) {
    const product = await Product.create(payload)
        .catch(err => { throw new Error('Error to create product') })

    return product;
}

async function updateProduct(payload, productId) {
    const product = await Product.findById(productId)
        .catch(err => { throw new Error('Error to find product') })
    if (!product) { throw new Error('Can not find product') }
    
    const productUpdate = await product.update(payload)
        .catch(err => { throw new Error('Error to update product') })   

    return productUpdate;
}

async function deleteProduct(productId) {
    const product = await Product.findById(productId)
        .catch(err => { throw new Error('Error to find product') })
    if (!product) { throw new Error('Can not find product') }
    
    const productDelete = await product.destroy()
        .catch(err => { throw new Error('Error to delete product') })   

    return productDelete;
}

