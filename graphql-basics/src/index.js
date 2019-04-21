
import { GraphQLServer } from 'graphql-yoga';
 

//Type definitions (schema)


const typeDefs  = `
    type Query {
        id: ID!,
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float!
        greeting(name: String, job: String): String!
        me: User!
        post: Post!
    }

    type Test {
        x: Int
    }

    type User {
            id: ID!,
            name: String!
            age: Int!
            employed: Boolean!
            gpa: Float!
    }

    type Post {
            id: ID!
            title: String!
            body: String!
            published: Boolean!
    }
`;

// Resolvers 

const resolvers = {
    Query: {
        id() {
            return 1;
        },
        name() {
            return "Mithun Das!!!";
        },
        age() {
            return 32;
        },
        employed() {
            return true;
        },
        gpa() {
            return 3.21;
        },
        greeting(parent, args, ctx, info) {
            console.log(parent);
            console.log(args);
            console.log(ctx);
            console.log(info);

            return args.name;
        },
        me() {
            return {
                id: 1,
                name: "mithun das",
                age: 26,
                employed: true
            }
        },
        post() {
            return {
                id: '1',
                title: 'GraphQL 101',
                body: 'First Post',
                published: false
            }
        }
    },

    Test: {
        x() {
            return 1;
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start( () => {
    console.log("Server is up !!!");
});




// import { message, name, myFunction } from './myModule';
// import info from './myModule';


// console.log(message);
// console.log(name);
// console.log(info);
// console.log(myFunction('Jessica'));
// console.log(myFunction('Jessica'));