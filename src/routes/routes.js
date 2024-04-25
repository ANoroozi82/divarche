const validation = require('../middleware/validations');
const accesses = require('../middleware/accesses');
const responseController = require('../controllers/responseController');
const userInfoController = require('../controllers/userInfoController');
const u = new userInfoController()
const url = require('url');

module.exports = async (req , res) => {
  try {
    await u.signup(req,res)
    // req.pathName = url.parse(req.url).pathname;
    // chooseRoute[req.method][req.pathName]().checkAccess(req, res).validation(req, res);
  }
  catch (err) {
    chooseRoute.default(res, err);
  }
};

const chooseRoute = {
  'POST' : {
    '/user/signup' : () => {
      return checkAccess;
    },
  },
  'PUT' : {
    '/user/login' : () => {
      return checkAccess;
    },
    '/user/logout' : () => {
      return checkAccess;
    },
    '/user/updateInfo' : () => {
      return checkAccess;
    },
  },
  'GET' : {
    '/user/getInfo' : () => {
      return checkAccess;
    },
  },
  default : (res, err) => {
    if (err.message === 'chooseRoute[req.method][req.pathName] is not a function') {
      responseController(res, 404, 'Route or Method not Found', 'RouteOrMethodNotAllowed');
    }
  }
};

const checkAccess = {
  checkAccess : (req, res) => {
    new accesses(req, res);
    return checkValid;
  }
};

const checkValid = {
  validation : (req, res) => {
    new validation(req, res); 
  }
};

