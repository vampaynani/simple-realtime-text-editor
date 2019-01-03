const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const typeDefs = './schema.graphql';
const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');

const Person = require('./resolvers/Person');
const Date = require('./resolvers/Date');

const resolvers = {
  Query,
  Mutation,
  Person,
  Date
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: rawRequest => ({
    rawRequest,
    isAuthorized: () => {
      const AuthHeader = rawRequest.request.header('authorization');
      if(!AuthHeader){
        throw "Unauthorized";
      }
      const token = AuthHeader.replace('Bearer ', '');
      const decodedToken = jwt.verify(token, '12345');
      return decodedToken;
    }
  })
});

mongoose.connect('mongodb://localhost/graphql-c25');
server.start(() => console.log('Server is running'));
