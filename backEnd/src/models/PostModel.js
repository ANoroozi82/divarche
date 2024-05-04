const Base = require('./BaseSqlModel');

module.exports = class PostModel extends Base {
  constructor() {
    super('posts');
  }
};