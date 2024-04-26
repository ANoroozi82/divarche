const responseController = require('../controllers/responseController');
const AccessModel = require('../models/AccessModel');
const SessionModel = require('../models/SessionModel');
const Cookies = require('cookies');
const shortid = require('shortid');
const moment = require('jalali-moment');

class Access {

  constructor(req, res) {
    this.access = new AccessModel();
    this.session = new SessionModel();
    this.checkPermission(req, res, null);
  }

  async checkPermission(req, res, token) {
    const sessionResult = await this.getSession(req, res, token);

    if(sessionResult !== false && sessionResult.length > 0) {
      const infoJson = JSON.parse(sessionResult[0].info);
      const accessList = await this.getAccess(infoJson['role']);
      if (!accessList.includes(req.pathName)) {
        responseController(res, 403, 'Access denied', 'accessDenied');
      }
      else {
        responseController(res, 200, 'Got it', 's');
      }
    }
    else {
      await this.createSession(req, res);
    }
  }
  
  async getAccess(role) {
    const result = await this.access.getAccess(role);
    return  JSON.parse(result);
  }
  
  async getSession(req, res, token) {
    if (!token) {
      let cookies = Cookies(req, res);
      token = cookies.get('token');
    }

    if(token) {
      const resultOfSession = await this.session.findBy('info', 'token', token);

      if (resultOfSession) {
        return resultOfSession;
      }
      return false;
    }
    else {
      return false;
    }
  }

  async createSession(req, res) {
    try {
      req.token = shortid.generate();
      const now = new Date();
      const expired = this.getCookieExpireDate(now);
      const info = {
        'role': 'visitor',
        'user_id': '',
        'date': moment(now).locale('fa').format('YYYY/MM/DD'),
        'time': moment(now).locale('fa').format('HH:mm:ss'),
        'expired': expired
      };

      await this.session.CREATE('token, info', `'${req.token}', '${JSON.stringify(info)}'`);
      this.setCookie(req, res, expired);
      await this.checkPermission(req, res, req.token);
    }
    catch (err) {
      return err;
    }
  }

  setCookie(req, res, expired) {
    res.setHeader('Set-Cookie', `token=${req.token}; Path=/; Expires=${expired}`);
  }

  getCookieExpireDate(tomorrow) {
    tomorrow.setTime(tomorrow.getTime() + (24 * 60 * 60 * 1000));
    return tomorrow.toUTCString();
  }


}

module.exports = Access;