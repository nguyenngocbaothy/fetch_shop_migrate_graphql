const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    image: String
    price: Float
    cat_id: ID
    Category: Category
  }
  type Category {
    id:ID  
    name: String
    description: String
    image: String
    Products: [Product]
  }
  
  type Query {
    products: [Product]
    categories: [Category]
  }
  
  type Mutation {
    getProductById(id: ID): Product
    createProduct(name: String, description: String, image: String, price: Float, cat_id: ID): Product!
    updateProduct(name: String, description: String, image: String, price: Float, cat_id: ID, productId: ID): Product!
    deleteProduct(id: ID): Product
  }
`;

module.exports = typeDefs;