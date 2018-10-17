const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
    message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const user = require('./api/user');
// const app = express();

// if(process.env.NODE_ENV !== 'test') {
//     app.use(morgan('dev'));
// } 

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/users', user);

// module.exports = app;