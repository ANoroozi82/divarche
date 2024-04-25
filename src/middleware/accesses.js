const AccessModel = require('../models/AccessModel');
const Cookies = require('cookies');
const url = require('url');

class Access {
  constructor(req, res) {
    this.access = new AccessModel();
    this.checkPermission(req, res);
  }
  async checkPermission(req, res) {
    const path = url.parse(req.url).pathname;
    let cookies = Cookies(req, res);

    console.log(cookies.get('token'));
    const reaccessList = await this.getAccess();
  }
  
  async getAccess() {
    const result = await this.access.getAccess('admin');
    return  JSON.parse(result);
  }
}

module.exports = Access;