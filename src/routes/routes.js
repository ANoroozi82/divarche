const validation = require('../middleware/validations');
const Accesses = require('../middleware/accesses');
const responseController = require('../controllers/responseController');
const url = require('url');


class RoutesClass {
  constructor(diContainer) {
    this.diContainer = diContainer;
    this.userInfoController = this.diContainer.get('userInfoController');
    this.postsController = this.diContainer.get('postsController');
    this.route = {
      '/user/signup' : this.userInfoController.signup,
    };
  }

  async routes(req, res) {
    try {
      req.pathName = url.parse(req.url).pathname;
      const access = new Accesses(this.diContainer);
      if (chooseRoute[req.method][req.pathName]()) {
        if (await access.checkPermission(req, res, null)) {
          validation(req, res, this.route[req.pathName]);
        }
      }
    }
    catch (err) {
      chooseRoute.default(res, err);
    }
  }
}

module.exports = RoutesClass;

const chooseRoute = {
  'POST' : {
    '/user/signup' : () => {
      return true;
    },
  },
  'PUT' : {
    '/user/login' : () => {
      return true;
    },
    '/user/logout' : () => {
      return true;
    },
    '/user/updateInfo' : () => {
      return true;
    },
  },
  'GET' : {
    '/user/getInfo' : () => {
      return true;
    },
  },
  default : (res, err) => {
    if (err.message === 'chooseRoute[req.method][req.pathName] is not a function') {
      responseController(res, 404, 'Route or Method not Found', 'RouteOrMethodNotAllowed');
    }
  }
};


