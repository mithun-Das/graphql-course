const Subscription = {
    count: {
        subscribe(parent, args, { pubsub }, info) {
            let count = 0;

            setInterval( () => {
               ++count;
               pubsub.publish('count', {
                   count
               });
            }, 100);

            return pubsub.asyncIterator('count');
        }
    },

    comment: {
        subscribe(parent, args, { db, pubsub }, info) {

            var post = db.posts.find( (post) => {
                return post.id == args.postId ;
            });

            if(!post) {
                throw new Error('Post does not exist ');
            }

            return pubsub.asyncIterator('comment ${args.postId}');
        }
    },

    post: {
        subscribe(parent, args, { db, pubsub }, info) {
            return pubsub.asyncIterator('post');
        }
    }
};

export { Subscription as default };