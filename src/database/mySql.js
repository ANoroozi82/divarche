const mysql = require('mysql')
const connectionConfig = require('../configs/config')

class mySql {
    db
    constructor() {
        this.db = mysql.createConnection(connectionConfig.databaseConfig)
        this.db.connect((error) => {
            if (error) throw error
            console.log('connected!!!')
        })

    }


}

module.exports = mySql