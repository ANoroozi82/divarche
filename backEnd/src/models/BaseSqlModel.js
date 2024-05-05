const mySql = require('mysql');
const connectionConfig = require('../configs/config');

class BaseSqlModel {
  WHERE_QUERY;


  constructor(tableName) {
    this.tableName = tableName;
    this.connection = mySql.createConnection(connectionConfig.databaseConfig);
    this.connection.connect((error) => {
      if (error) throw new error;
      console.log(`${tableName} table is ready to use!`);
    });

  }

  async executeQuery(sql) {
    return await new Promise((resolve, reject) => {
      this.connection.query(sql, (error, result) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

  async findAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    const results = await this.executeQuery(query);
    return results;
  }

  async findBy(PARAMS, CONDITIONS) {
    const query = `SELECT ${PARAMS} FROM ${this.tableName} WHERE ${CONDITIONS} `;
    const result = await this.executeQuery(query);
    return result;
  }

  async CREATE(KEYS, VALUES) {
    const query = `INSERT INTO ${this.tableName}(${KEYS}) VALUES(${VALUES})`;

    const results = await this.executeQuery(query);
    return results.affectedRows;
  }

  async UPDATE(KEY, VALUE) {
    await this.where(KEY, VALUE);
    const query = `UPDATE ${this.tableName} SET ${VALUE} ${this.WHERE_QUERY}`;
    const results = this.executeQuery(query, [VALUE, KEY]);
    return results.affectedRows;
  }

  async DELETE(KEY, VALUE) {
    await this.where(KEY, VALUE);
    const query = `DELETE FROM ${this.tableName} ${this.WHERE_QUERY}`;
    const results = this.executeQuery(query, [VALUE]);
    return results.affectedRows;
  }

  async where(KEY, VALUE) {
    this.WHERE_QUERY = ` WHERE ${KEY} = '${VALUE}'`;
  }
}

module.exports = BaseSqlModel;


