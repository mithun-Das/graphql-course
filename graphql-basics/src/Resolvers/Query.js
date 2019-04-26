const Query = {
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
            // console.log(parent);
            // console.log(args);
            console.log(ctx);
           // console.log(info);

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
            return ctx.db.posts.filter( (post) => {
                   return post.id == args.id;
            });
        },
        users(parent, args, { db }, info) {
            return db.userList.filter( (user) => {
                return args.id == user.id;
            });
        },
        comments(parent,args, { db } ,info) {
           // return commentList.filter( (comment) => {
                return db.commentList;
            //});
        }

};

export { Query as default };