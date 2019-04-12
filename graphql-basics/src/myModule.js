const message = 'Message from module.js';

const name = 'Mithun';

const location = 'Philadelphia';

const myFunction = (name) => {
    return 'My name';
};

export {
    message,
    name,
    location as default,
    myFunction
};