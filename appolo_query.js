const Product = require('./models').Product;
const Category = require('./models').Category;

const resolvers = {
    Query: {
        products: () => Product.findAll({
            include: [
                {
                    model: Category
                }
            ]
        }),
        categories: () => Category.findAll({
            include: [
                {
                    model: Product
                }
            ]
        })
    }
};

module.exports = resolvers;