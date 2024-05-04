const Base = require('./BaseSqlModel');

class AccessModel extends Base {
  constructor() {
    super('roles');
  }

  async getAccess(value) {
    const query = `SELECT access FROM ${this.tableName} WHERE role_name = '${value}'`;
    const results = await this.executeQuery(query);
    return results[0].access.replaceAll('\n', '').replace(/'/g, '"');
  }
}

module.exports = AccessModel;