
import { GraphQLServer } from 'graphql-yoga';
 

const userList = [
    {
        id: "1",
        name: "mithun das",
        age: 26,
        employed: true
    },
    {
        id: "2",
        name: "Nitu das",
        age: 28,
        employed: true
    },
    {
        id: "3",
        name: "munni das",
        age: 26,
        employed: true
    }
];

const posts = [
    {
        id: "1",
        title: "post - 1",
        body: "First Post",
        author: "1",
        published: true
    },
    {
        id: "2",
        title: "post - 2",
        body: "Second Post",
        author: "2",
        published: true
    },
    {
        id: "3",
        title: "post - 3",
        body: "Third Post",
        author: "3",
        published: false
    }
];

//Type definitions (schema)


const typeDefs  = `
    type Query {
        id: ID!,
        name: String!
        age: Int!
        employed: Boolean!
        add(numbers : [Int!]!): Int!
        gpa: Float!
        greeting(name: String): String!
        grades: [Int!]!
        me: User!
        post(id: String): [Post!]!
        users(age: Int): [User!]!
    }

    type Test {
        x: Int
    }

    type User {
            id: String!,
            name: String!
            age: Int!
            employed: Boolean!
            gpa: Float!
    }

    type Post {
            id: String!
            title: String!
            body: String!
            author: User!
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
        add(parent,args,ctx,info) {
            for(var i = 0, sum = 0; i < args.numbers.length ; ++i) {
                sum += args.numbers[i];
            }

            return sum;
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
        grades() {
            return [3,3,4,null];
        },
        me() {
            return {
                id: 1,
                name: "mithun das",
                age: 26,
                employed: true
            }
        },
        post(parent, args, ctx, info) {
            return posts.filter( (post) => {
                   return post.id == args.id;
            });
        },
        users(parent, args, ctx, info) {
            return userList.filter( (user) => {
                return args.age == user.age;
            });
        }
    },

    Post: {
        author(parent, args, ctx, info) {
            return userList.find( (user) => {
                return user.id == parent.author;        
            });
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