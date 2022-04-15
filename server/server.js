const express = require('express');
const path = require('path');
//import apollo server
const { ApolloServer } = require('apollo-server-express');
// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

//db connection
const db = require('./config/connection');
const { start } = require('repl');

// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;

//middleware parsing
async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    await server.start()

    server.applyMiddleware({ app });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
}

startServer()

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

//get all

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});