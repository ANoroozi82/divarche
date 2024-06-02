const Base = require('./BaseSqlModel');

class SubsetModel extends Base {
  constructor() {
    super('subset');
  }
}

module.exports = SubsetModel;