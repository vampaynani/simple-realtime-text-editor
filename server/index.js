const { GraphQLServer, PubSub } = require('graphql-yoga');

const typeDefs = './schema.graphql';
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');
const Subscription = require('./resolvers/subscription');

const resolvers = {
  Query,
  Mutation,
  Subscription
};

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: () => ({
    pubsub
  })
});

server.start(() => console.log('Server is running'));
