const User = {
        postList(parent, args, { db }, info) {
            return db.posts.filter((blog) => {
                return blog.author == parent.id ;
            });
    },

        comments(parent, args, { db }, info) {
            return db.commentList.filter((comment) => {
                return comment.userId == parent.id;
            });
        }

};

export { User as default };