const Base = require('./BaseSqlModel');

class CategoryModel extends Base {
  constructor() {
    super('category');
  }
}

module.exports = CategoryModel;