const validation = require('../middleware/validations');
const accesses = require('../middleware/accesses');

module.exports = (req , res) => {
  // validation(req, res, () => {});
  new accesses(req, res);
};