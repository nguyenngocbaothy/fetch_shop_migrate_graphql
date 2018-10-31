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
    },
    Mutation: {
        createProduct: async (parent, args) => {
            const product = await Product.create(args);
            if (!product) { throw new Error('Can not create product'); }

            return product;
        }
    }
};

module.exports = resolvers;