// graphql
const { ApolloServer } = require('apollo-server');


const typeDefs = require('./appolo_schema');
const resolvers = require('./appolo_query');


const server = new ApolloServer({ typeDefs, resolvers });
  
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
