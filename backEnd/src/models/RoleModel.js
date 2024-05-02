const  BaseSqlModel = require('../models/BaseSqlModel')
class RoleModel extends BaseSqlModel{
    constructor() {
        super('roles');
    }


}

module.exports = RoleModel