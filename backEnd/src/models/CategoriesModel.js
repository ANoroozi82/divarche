const Base = require('./BaseSqlModel');

class CategoriesModel extends Base {
  constructor() {
    super('categories');
  }
}

module.exports = CategoriesModel;