const isProd = false;
module.exports = isProd ? require('./configureStore.prod') : require('./configureStore.dev');
