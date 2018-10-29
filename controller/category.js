const Category = require('../models/').Category;

module.exports = {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};

async function getCategory() {
    const categories = await Category.findAll({})
        .catch(err => { throw new Error('Error to get Categories') })

    return categories;
}

async function createCategory(payload) {
    const category = await Category.create(payload)
        .catch(err => { throw new Error('Error to create Categorys') })

    return category;
}

async function updateCategory(payload, categoryId) {
    const category = await Category.findById(categoryId)
        .catch(err => { throw new Error('Error to find Categorys') })
    if (!category) { throw new Error('Can not find Category') }
    
    const categoryUpdate = await category.update(payload)
        .catch(err => { throw new Error('Error to update Category') })   

    return categoryUpdate;
}

async function deleteCategory(categoryId) {
    const category = await Category.findById(categoryId)
        .catch(err => { throw new Error('Error to find Categorys') })
    if (!category) { throw new Error('Can not find Category') }
    
    const categoryDelete = await category.destroy()
        .catch(err => { throw new Error('Error to delete Category') })   

    return categoryDelete;
}

