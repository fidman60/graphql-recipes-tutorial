const { ApolloServer } = require('apollo-server');
const typeDefs = require('./app/schema');
const resolvers = require('./app/resolvers');
const models = require('../database/models');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
});

server
    .listen()
    .then(({ url }) => console.log('Server is running on localhost:4000'))
