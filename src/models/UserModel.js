const BaseSqlModel = require('../models/BaseSqlModel')

class UserModel extends BaseSqlModel{
    constructor() {
        super('user');
    }
}