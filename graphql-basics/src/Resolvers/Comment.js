const Comment = {

        userId(parent, args, { db }, info) {
            return db.userList.find((user) => {
                return user.id == parent.userId ;
            });
        },

        postId(parent,args, { db }, info) {
            return db.posts.find((post) => {
                return post.id == parent.postId ;
            });
        }
};

export { Comment as default };