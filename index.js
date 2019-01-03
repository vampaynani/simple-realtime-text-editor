const { GraphQLServer } = require('graphql-yoga');

const typeDefs = './schema.graphql';
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server is running'));
