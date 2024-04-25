const Ajv = require('ajv');
const responseController = require('../controllers/responseController');
const url = require('url');
const signup = require('../schemas/signup');
const login = require('../schemas/login');
const logout = require('../schemas/logout');
const getInfo = require('../schemas/getInfo');
const updateInfo = require('../schemas/updateInfo');

module.exports = (req, res, next) => {
  const { pathname } = url.parse(req.url);

  const ajv = new Ajv({  allErrors: true, verbose: true});

  const validate = ajv.compile(schemas[pathname]);

  const valid = validate(req.body);

  if (valid) {
    next(req, res);
  }
  else {
    responseController(res, 400, ajv.errorsText(validate.errors), 'wrongParam');
  }
};

const schemas = {
  '/user/signup' : signup,
  '/user/login' : login,
  '/user/logout' : logout,
  '/user/getInfo' : getInfo,
  '/user/updateInfo' : updateInfo,
};