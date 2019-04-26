
import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4' ;
import db from './db';
import Query from './Resolvers/Query';
import Mutation from './Resolvers/Mutation';
import Post from './Resolvers/Post';
import User from './Resolvers/User';
import Comment from './Resolvers/Comment';

//Type definitions (schema)

// Resolvers 

const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers : {
        Query,
        Mutation,
        User,
        Post,
        Comment
    },
    context : {
        db
    }
});

server.start( () => {
    console.log("Server is up !!!");
});

//const typeDefs = ``;

// const resolvers = {

//     Test: {
//         x() {
//             return 1;
//         }
//     }
// };


// import { message, name, myFunction } from './myModule';
// import info from './myModule';


// console.log(message);
// console.log(name);
// console.log(info);
// console.log(myFunction('Jessica'));
// console.log(myFunction('Jessica'));