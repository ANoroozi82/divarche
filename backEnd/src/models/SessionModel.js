const Base = require('./BaseSqlModel');

class SessionModel extends Base {
  constructor() {
    super('sessions');
  }
}

module.exports = SessionModel;