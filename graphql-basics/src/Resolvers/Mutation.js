
import uuidv4 from 'uuid/v4';


const Mutation = {
        createUser(parent, args, { db }, info) {
        
        var emailExist = db.userList.some( (user) => {
            return user.email == args.data.email ;
        });

        if(emailExist){
            throw new Error('Email already exists');
        }

        const user = {
            id: uuidv4(),
            name: args.data.name,
            email: args.data.email,
            age: args.data.age,
            employed: true
        }

        db.userList.push(user);

        return user;
    },

    deleteUser(parent, args, { db }, info) {

        var userIndex = db.userList.findIndex( (user) => {
                return user.id == args.id ;
        });

        if(userIndex < 0) {
            throw new Error('User not found');
        }

        db.userList.splice(userIndex, 1);

        db.posts = db.posts.filter( (post) => {

            let postByUser =  post.author == args.id;

            if(postByUser) {
                db.commentList = db.commentList.filter( (comment) => {
                    return !(comment.postId == post.id);
                });
            }

            return !postByUser;
        });

        db.commentList = db.commentList.filter( (comment) => {
            return comment.userId != args.id ;
        });

        return db.userList;
    },

    updateUser(parent, args, { db } , info) {

        var user = db.userList.find( (user) => {
            return user.id == args.id;
        });

        if(!user){
            throw new Error('User not found');
        }

        var isEmailExist = db.userList.find( (user) => {
            return user.email = args.data.email ;
        });

        if (!isEmailExist) {
            throw new Error('Email already exist');
        }

        user.email = args.data.email;
        user.name = args.data.name;
        user.age = args.data.age;

        return db.userList ;
    },

    createPost(parent, args, { db } , info) {

        var userExist = db.userList.some( (user) => {
            return user.id == args.author;
        });

        if(!userExist){
            throw new Error('User does not exist');
        }

        const postData = {
            id: uuidv4(),
            ...args
        }

        db.posts.push(postData);
        console.log(db.posts);

        return postData;
    },

    deletePost(parent, args,{ db }, info) {

        var postIdExist = db.posts.findIndex((post) => {
            return post.id == args.id;
        });

        if(postIdExist < 0) {
            throw new Error('Post not found!!!');
        }

        db.posts = db.posts.filter( (post) => {

            let postMatch = post.id == args.id ;

            if(postMatch) {
                db.commentList = db.commentList.filter( (comment) => {
                    return comment.postId != args.id ;
                });
            }

            return !postMatch ;
                
        });

        return db.posts ;
    },

    updatePost(parent, args, { db }, info) {
        var post = db.posts.find((post) => {
            return post.id == args.id;
        });

        if (!post) {
            throw new Error('Post not found');
        }

        post.body = args.data.body;
        post.title = args.data.title;
        post.published = args.data.published;

        return db.posts;
    },

    createComment(parent, args, { db, pubsub }, info) {

        var postExist = db.posts.some( (post) => {
            return post.id == args.postId ;
        });

        if(!postExist) {
            throw new Error('Post does not exist !!!');
        }

        var userExist = db.userList.some( (user) => {
            return user.id = args.userId;
        });

        if(!userExist) {
            throw new Error('User does not exist !!!');
        }

        const commentData = {
            id: uuidv4(),
            postId: args.postId,
            userId: args.userId,
            description: args.description
        };

        db.commentList.push(commentData);
        var data = db.commentList;
        pubsub.publish('comment ${args.postId}', { comment: data } );

        console.log(db.commentList);
        return commentData ;
    }
};

export { Mutation as default };