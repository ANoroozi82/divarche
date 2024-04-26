const server =  require('./src/server/server');
const postsController = require('./src/controllers/postsController');
const userInfoController = require('./src/controllers/userInfoController');
const accessModel = require('./src/models/AccessModel');
const sessionModel = require('./src/models/SessionModel');
const DIContainer = require('./DI');

const diContainer = new DIContainer();

diContainer.register('postsController' , new postsController());
diContainer.register('userInfoController' , new userInfoController());
diContainer.register('accessModel' , new accessModel());
diContainer.register('sessionModel' , new sessionModel());

server(diContainer);