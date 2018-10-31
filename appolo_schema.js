const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    image: String
    price: Float
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
`;

module.exports = typeDefs;