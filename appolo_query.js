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
        getProductById: async (parent, {id}) => {
            const product = await Product.findByPk(id);
            if (!product) { throw new Error('Can not find product'); }

            return product;
        },
        createProduct: async (parent, args) => {
            const product = await Product.create(args);
            if (!product) { throw new Error('Can not create product'); }

            return product;
        },
        updateProduct: async (parent, {productId, ...args}) => {
            const product = await Product.update(args, {
                where: {id: productId}
            })
        
            return product;
        },
        deleteProduct: async (parent, args) => {
            const product = await Product.destroy({
                where: {id: args.id}
            })
        
            return product;
        }
    }
};

module.exports = resolvers;