const validation = require('../middleware/validations');
const accesses = require('../middleware/accesses');
const userinfo = require('../controllers/userInfo')
module.exports = (req , res) => {
    validation(req, res, () => {
        userinfo.prototype.signup(req,res)
    });
};