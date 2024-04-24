const mySql = require('../database/mySql')

class BaseSqlModel {
    constructor(tableName) {
        this.mysql = (new mySql()).db
        this.tableName = tableName
    }

    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            this.mysql.query(query, params, (error, result) => {
                error ? reject(error) : resolve(result)
            })
        })
    }

    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`
        const results = await this.executeQuery(query)
        return results
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ${id}`
        const results = await this.executeQuery(query, [id])
        return results[0]
    }

    async create(data) {
        const query = `INSERT INTO ${this.tableName} set {data}`
        const results = this.executeQuery(query, data)
        return results.insertId
    }

    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ${data} WHERE id = ${id} `
        const results = this.executeQuery(query, [data, id])
        return results.affectedRows
    }

    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ${id}`
        const results = this.executeQuery(query, [id])
        return results.affectedRows
    }
}

module.exports = BaseSqlModel


