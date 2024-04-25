const mySql = require('../database/mySql')

class BaseSqlModel {
    WHERE_QUERY
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

    async findBy(KEY,VALUE) {
        await this.where(KEY,VALUE)
        const query = `SELECT * FROM ${this.tableName} ${this.WHERE_QUERY}`
        const results = await this.executeQuery(query, [VALUE])
        return results[0]
    }

    async CREATE(KEYS,VALUES) {
        const query = `INSERT INTO ${this.tableName}(${KEYS}) VALUES(${VALUES})`
        const results = this.executeQuery(query, VALUE)
        return results.insertId
    }

    async UPDATE(KEY,VALUE) {
        await this.where(KEY,VALUE)
        const query = `UPDATE ${this.tableName} SET ${VALUE} ${this.WHERE_QUERY}`
        const results = this.executeQuery(query, [VALUE, KEY])
        return results.affectedRows
    }
    async DELETE(KEY,VALUE) {
        await this.where(KEY,VALUE)
        const query = `DELETE FROM ${this.tableName} ${this.WHERE_QUERY}`
        const results = this.executeQuery(query, [VALUE])
        return results.affectedRows
    }
    async where(KEY,VALUE){
        this.WHERE_QUERY = ` WHERE ${KEY} = '${VALUE}'`
    }
}

module.exports = BaseSqlModel


