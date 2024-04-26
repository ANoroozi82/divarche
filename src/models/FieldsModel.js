const Base = require('./BaseSqlModel');

class FieldsModel extends Base {
  constructor() {
    super('fields');
  }
}

module.exports = FieldsModel;