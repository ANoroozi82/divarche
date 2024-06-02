const server =  require('./src/server/server');
const postsController = require('./src/controllers/postsController');
const userInfoController = require('./src/controllers/userInfoController');
const postModel = require('./src/models/PostModel');
const userModel = require('./src/models/UserModel');
const accessModel = require('./src/models/AccessModel');
const sessionModel = require('./src/models/SessionModel');
const categoryModel = require('./src/models/CategoryModel');
const categoriesModel = require('./src/models/CategoriesModel');
const fieldsModel = require('./src/models/FieldsModel');
const subsetModel = require('./src/models/SubsetModel');
const DIContainer = require('./DI');

const diContainer = new DIContainer();
diContainer.register('postModel', new postModel());
diContainer.register('userModel', new userModel());
diContainer.register('categoryModel', new categoryModel());
diContainer.register('categoriesModel', new categoriesModel());
diContainer.register('fieldsModel', new fieldsModel());
diContainer.register('subsetModel', new subsetModel());
diContainer.register('postsController' , new postsController(diContainer));
diContainer.register('userInfoController' , new userInfoController(new userModel()));
diContainer.register('accessModel' , new accessModel());
diContainer.register('sessionModel' , new sessionModel());

server(diContainer);