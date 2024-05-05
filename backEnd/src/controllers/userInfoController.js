const RoleModel = require('../models/RoleModel');
const User = require('../models/UserModel');

class UserInfoController {
  constructor() {
    this.role = new RoleModel();
    this.user = new User();
  }

  async signup(req, res) {
    try {
      console.log(req.body);

      // let keys = 'user_id,phone_number,role_name,user,pass';
      // let values = '\'1\',\'09336077180\',\'admin\',\'mahdi.golzar\',\'MahdiJs1382@\'';
      // const r = await this.user.CREATE(keys, values);
      // console.log(r);
    }
    catch (error) {
      console.log(error.message);
    }

  }
}

module.exports = UserInfoController;