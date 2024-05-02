const AccessModel = require('../models/AccessModel');
const SessionModel = require('../models/SessionModel');
const Cookies = require('cookies');
const shortid = require('shortid');
const moment = require('jalali-moment');

class Access {

  constructor(req, res) {
    this.access = new AccessModel();
    this.session = new SessionModel();
    this.checkPermission(req, res);
  }

  async checkPermission(req, res) {
    const sessionResult = await this.getSession(req, res);

    if(sessionResult) {

    }
    else {
      await this.createSession(req);
    }
    const reaccessList = await this.getAccess();
  }
  
  async getAccess() {
    const result = await this.access.getAccess('admin');
    return  JSON.parse(result);
  }
  
  async getSession(req, res) {
    let cookies = Cookies(req, res);

    if(cookies.get('token')) {
      const resultOfSession = await this.session.findBy('token', cookies.get('token'));

      if (resultOfSession) {
        return resultOfSession;
      }
      return false;
    }
    else {
      return false;
    }
  }

  async createSession(req) {
    const token = shortid.generate();
    const now = new Date();
    const info = {
      'role' : 'visitor',
      'user_id' : '',
      'date' : moment(now).locale('fa').format('YYYY/MM/DD'),
      'time' : moment(now).locale('fa').format('HH:mm:ss'),
      'expired' : this.getCookieExpireDate()
    };

    const createSessionResult = await this.session.CREATE('token, info', `'${token}', '${JSON.stringify(info)}'`);
    console.log(createSessionResult);
  }

  getCookieExpireDate() {
    const tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + (24 * 60 * 60 * 1000));
    return tomorrow.toUTCString(); // تبدیل تاریخ به فرمت UTC مناسب برای HTTP headers
  }


}

module.exports = Access;