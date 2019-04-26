
let userList = [{
        id: "1",
        name: "mithun das",
        age: 26,
        email: "mithun.das227@gmail.com",
        employed: true
    },
    {
        id: "2",
        name: "Nitu das",
        age: 28,
        email: "nitu.das227@gmail.com",
        employed: true
    },
    {
        id: "3",
        name: "munni das",
        age: 26,
        email: "munni.das227@gmail.com",
        employed: true
    }
];

let posts = [{
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

let commentList = [{
        id: "1",
        postId: "1",
        userId: "1",
        description: "This is comment - 1"
    },
    {
        id: "2",
        postId: "2",
        userId: "2",
        description: "This is comment - 2"
    },
    {
        id: "3",
        postId: "2",
        userId: "1",
        description: "This is comment - 3"
    }
];

const db =  {
    userList,
    posts,
    commentList
}

export { db as default }